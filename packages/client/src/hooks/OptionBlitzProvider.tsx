import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Provider } from "@ethersproject/abstract-provider";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import axios, { Method } from "axios";
import { _connectToContracts, _OptionBlitzContracts, _OptionBlitzDeploymentJSON } from "../contracts/contracts";
import { _connectionByChainId, OptionBlitzConnection } from "./OptionBlitzConnection";
import { OptionBlitz } from "./OptionBlitz";
import { OptionBlitzStore } from "./OptionBlitzStore";
import { OptionBlitzStoreProvider } from "./OptionBlitzStoreProvider";
import devOrNull from "../contracts/deployments/default/private.json";
import { BigNumber } from "ethers";

type OptionBlitzProviderProps = {
  loader?: React.ReactNode;
  children?: React.ReactNode;
};

type OptionBlitzContextValue = {
  account: string | undefined | null;
  provider: Provider | undefined;
  chainId: number | undefined;
  optionBlitz: OptionBlitz | undefined;
  jwt: any;
};

const dev = devOrNull as _OptionBlitzDeploymentJSON | null;

const deployments: {
  [chainId: number]: _OptionBlitzDeploymentJSON | undefined;
} = {
  // need to add new contracts to below json files or comment out
  // [mainnet.chainId]: mainnet,
  // [ropsten.chainId]: ropsten,
  // [rinkeby.chainId]: rinkeby,
  // [goerli.chainId]: goerli,
  // [kovan.chainId]: kovan,

  ...(dev !== null ? { [dev.chainId]: dev } : {}),
  //3: ropsten,
};

const OptionBlitzContext = createContext<OptionBlitzContextValue | undefined>(undefined);

//const getRpcEndpoint = () => "https://optionblitz1.us-east-2.elasticbeanstalk.com";
const getRpcEndpoint = () => "https://optionblitz1.us-east-2.elasticbeanstalk.com";
//const getRpcEndpoint = () => "https://git.sfxdx.ru";
//const getRpcEndpoint = () => "http://34.228.11.16:8080";
//const getRpcEndpoint = () => "https://optionblitz-dev.us-east-1.elasticbeanstalk.com";
//const getRpcEndpoint = () => "https://optblitz.sfxdx.com";
const ob_rpc_call = async (func: string, method: Method, data: string, headers?: Record<string, string>) => {
  return await axios({
    url: getRpcEndpoint() + func,
    method: method,
    data,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
    }
  })
}
const sendMessage = async (account: string, jwt: { access: string, refresh: string }) => {
  const x = await ob_rpc_call("/api/v1/chat/messages", "POST",
    JSON.stringify({
      text: "test hello",
    },
    ),
    {
      "Authorization": 'Bearer ' + jwt.access
    }
  )
  return x.data;
}

const getCalendar = async (jwt: { access: string, refresh: string }) => {
  ob_rpc_call("/api/v1/oracle/economic_calendar?from=1656640943&to=1659319343", "GET",
    "",
    {
      "Authorization": 'Bearer ' + jwt.access
    }
  ).then(o => {
    console.log(o);
  }).catch(err => {
    console.log(err);
  });
}

export const OptionBlitzProvider: React.FC<OptionBlitzProviderProps> = ({
  children,
  loader,
}) => {
  const [jwt, setJWT] = useState<{
    account: string | undefined | null;
    jwt: any;
  }>({ account: "", jwt: {} });
  const { library: provider, active, account, chainId, connector } = useWeb3React<Web3Provider>();
  const [optionBlitz, setOptionBlitz] = useState<OptionBlitz>();
  const [store, setStore] = useState<OptionBlitzStore>();
  console.log('current user', active, account, optionBlitz, store);

  // can use the same otp so long the call is not done again
  const pre_signed = useCallback(async (account: string): Promise<string> => {

    const otp = await ob_rpc_call("/api/v1/auth/pre_signed", "PUT",
      JSON.stringify({
        wallet: account
      })
    );
    return otp.data.nonce;
  }, []);

  // just same of refreshing token
  const refresh_token = useCallback(async (account: string, refreshToken: string) => {
    const token = await ob_rpc_call("/api/v1/auth/refresh", "POST",
      "{}", {
      "Authorization": 'Bearer ' + refreshToken
    });
    //console.log(token.data);
    setJWT({ account: account, jwt: token.data });
    return token.data;
  }, []);

  const sign_in = useCallback(async (account: string) => {
    const nonce = await pre_signed(account);
    const signer = provider?.getSigner();
    const signedMessage = await signer?.signMessage(nonce);
    let new_sign_in: {
      account: string | null | undefined;
      jwt: any;
    };
    const _sign_in = async (): Promise<Record<"access" | "refresh", string>> => {
      const token = await ob_rpc_call("/api/v1/auth/sign_in", "POST",
        JSON.stringify({
          wallet: account,
          signature: signedMessage,
        }));
      new_sign_in = { account: account, jwt: token.data }
      setJWT({ account: account, jwt: token.data });
      return token.data;
    };
    const _sign_up = async () => {
      await ob_rpc_call("/api/v1/auth/sign_up", "POST",
        JSON.stringify({
          wallet: account,
          signature: signedMessage,
          login: account
        }));
    }
    _sign_in()
      .then(async (token) => {
        //testing not needed to do it here
        //const newToken = await refresh_token(account, token.refresh);
        //const x =await sendMessage(account, token);
        //console.log(x);
      })
      .catch(async e => {
        console.log(e);
        if (e.response && e.response.data) {
          const ecode = e.response.data.code;
          const message = e.response.data.message;
          console.log(ecode, message);
        }
        if (!new_sign_in) {
          console.log('sign in failed, try sign-up first');
          _sign_up()
            .then(async () => {
              try {
                await _sign_in();
              } catch (e) {
                console.log("final sign in error", e)
              }
            })
            .catch(e => {
              console.log("sign up error", e);
            })
        }
      })
  }, [provider, pre_signed]);

  useEffect(() => {
    //console.log(active, account, jwt);
    if (active && account && jwt.account !== account) {
      sign_in(account).catch(e => { });
    }
    else {
      //console.log(account, jwt.account);
    }
  }, [account, active, provider, chainId, jwt, sign_in])

  useEffect(() => {
    console.log(`connecting to metamask ${account} ${provider} ${chainId} ${provider?.getSigner()}`);
    const connection = (account && provider && chainId && _connectionByChainId(provider, provider.getSigner(account), chainId, { account }))
      || undefined;
    const optionBlitz = connection && connection.contracts && new OptionBlitz(connection);

    if (optionBlitz) {
      console.log(`connection to optionblitz contracts established`);
      const store = optionBlitz?.store;
      setOptionBlitz(optionBlitz);
      if (store) {
        console.log(`store object created`);
        store.onLoaded = () => setStore(store);
        const stop = store.start();
        console.log(`start store tracking`)
        return () => {
          console.log(`unmount store`);
          store.onLoaded = undefined;
          setStore(undefined);
          stop();
        }
      }
    }
  }, [account, active, provider, chainId])

  return (
    <OptionBlitzContext.Provider value={{ jwt, account, provider, chainId, optionBlitz }}>
        {children}
      {/* <OptionBlitzStoreProvider store={store}>
      </OptionBlitzStoreProvider> */}
    </OptionBlitzContext.Provider>
  );
};

export const useOptionBlitz = () => {
  const optionBlitzContext = useContext(OptionBlitzContext);

  if (!optionBlitzContext) {
    throw new Error("You must provide a OptionBlitzContext via OptionBlitzProvider");
  }

  return optionBlitzContext;
};
