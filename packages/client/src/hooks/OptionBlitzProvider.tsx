import React, {
  createContext, useCallback, useContext, useEffect, useState, 
} from 'react';
import { Provider } from '@ethersproject/abstract-provider';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import axios, { Method } from 'axios';
import { BigNumber } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector';
import jwt_decode from 'jwt-decode';
import { access } from 'fs';
import { _connectToContracts, _OptionBlitzContracts, _OptionBlitzDeploymentJSON } from '../contracts/contracts';
import { _connectionByChainId, OptionBlitzConnection } from './OptionBlitzConnection';
import { OptionBlitz } from './OptionBlitz';
import { OptionBlitzStore } from './OptionBlitzStore';
import { OptionBlitzStoreProvider } from './OptionBlitzStoreProvider';
import { OptionBlitzPricefeed, priceFeed } from './OptionBlitzPricefeed';
import devOrNull from '../contracts/deployments/default/private.json';

export const injectedConnector = new InjectedConnector({});

// const getRpcEndpoint = () => "https://optionblitz1.us-east-2.elasticbeanstalk.com";
// const getRpcEndpoint = () => "https://optionblitz1.us-east-2.elasticbeanstalk.com";
// const getRpcEndpoint = () => "https://git.sfxdx.ru";
// const getRpcEndpoint = () => "http://34.228.11.16:8080";
const getRpcEndpoint = () => 'https://optionblitz-dev.us-east-1.elasticbeanstalk.com';
// const getRpcEndpoint = () => "https://optblitz.sfxdx.com";

const _ob_rpc_call = async (func: string, method: Method, data: string, headers?: Record<string, string>) => axios({
  url: getRpcEndpoint() + func,
  method,
  data,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...headers,
  },
});

const ob_rpc_call = async (func: string, method: Method, data: string, headers?: Record<string, string>) => {
  const _accessToken = headers?.accessToken || localStorage.getItem('accessToken');
  try {
    const accessToken = jwt_decode(_accessToken as string);
    console.log(accessToken);
  } catch (e) {

  }
  return _ob_rpc_call(func, method, data, 
    {
      ..._accessToken && {
        Authorization: `Bearer ${_accessToken}`,
      },
      ...headers,
    });
};

const refresh_jwtToken = async (account?: string, refreshToken?: string) => {
  const _refreshToken = localStorage.getItem('refreshToken');
  const token = await ob_rpc_call('/api/v1/auth/refresh', 'POST',
    '{}', {
      Authorization: `Bearer ${refreshToken ?? _refreshToken}`,
    });
  console.log(token.data);
  localStorage.setItem('accessToken', token.data.access);
  localStorage.setItem('refreshToken', token.data.refresh);
  return token.data;
};

const getPrice = async (symbol:string) => {
  const x = await ob_rpc_call(`/api/v1/oracle/last_quote/${symbol}`, 'GET',
    JSON.stringify({
    }),
    {
    });
  return x.data;
};

type OptionBlitzProviderProps = {
  loader?: React.ReactNode;
  children?: React.ReactNode;
};

export interface Backend {
  getRpcEndpoint: typeof getRpcEndpoint;
  backendCall: typeof ob_rpc_call;
  refreshJWT: typeof refresh_jwtToken;
  getPrice: typeof getPrice;
}

const backend = {
  getRpcEndpoint,
  backendCall: ob_rpc_call,
  refreshJWT: refresh_jwtToken,
  getPrice,
};

export type OptionBlitzContextValue = {
  account: string | undefined | null;
  provider: Provider | undefined;
  chainId: number | undefined;
  optionBlitz: OptionBlitz | undefined;
  jwt: any;
  signInAt: number | undefined;
  priceFeed: OptionBlitzPricefeed;
  backend: Backend;
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
  // 3: ropsten,
};

const OptionBlitzContext = createContext<OptionBlitzContextValue | undefined>(undefined);

const sendMessage = async (account: string, jwt: { access: string, refresh: string }) => {
  const x = await ob_rpc_call('/api/v1/chat/messages', 'POST',
    JSON.stringify({
      text: 'test hello',
    }),
    {
      Authorization: `Bearer ${jwt.access}`,
    });
  return x.data;
};

const getCalendar = async (jwt: { access: string, refresh: string }) => {
  ob_rpc_call('/api/v1/oracle/economic_calendar?from=1656640943&to=1659319343', 'GET',
    '',
    {
      Authorization: `Bearer ${jwt.access}`,
    }).then((o) => {
    console.log(o);
  }).catch((err) => {
    console.log(err);
  });
};

export const OptionBlitzProvider: React.FC<OptionBlitzProviderProps> = ({
  children,
  loader,
}) => {
  const [signInAt, setSignInAt] = useState<number | undefined>();
  const [jwt, setJWT] = useState<{
    account: string | undefined | null;
    jwt: any;
  }>({ account: '', jwt: {} });
  const {
    library: provider, active, account, chainId, connector, 
  } = useWeb3React<Web3Provider>();
  const [optionBlitz, setOptionBlitz] = useState<OptionBlitz>();
  const [store, setStore] = useState<OptionBlitzStore>();
  console.log('current user', active, account, optionBlitz, store);

  // can use the same otp so long the call is not done again
  const pre_signed = useCallback(async (_account: string): Promise<string> => {
    const otp = await ob_rpc_call('/api/v1/auth/pre_signed', 'PUT',
      JSON.stringify({
        wallet: _account,
      }));
    return otp.data.nonce;
  }, []);

  // just same of refreshing token
  const refresh_token = useCallback(async (_account: string, refreshToken: string) => {
    const token = await ob_rpc_call('/api/v1/auth/refresh', 'POST',
      '{}', {
        Authorization: `Bearer ${refreshToken}`,
      });
    console.log(token.data);
    setJWT({ account: _account, jwt: token.data });
    localStorage.setItem('accessToken', token.data.access);
    localStorage.setItem('refreshToken', token.data.refresh);
    return token.data;
  }, []);

  const sign_in = useCallback(async (_account: string) => {
    const nonce = await pre_signed(_account);
    const signer = provider?.getSigner();
    const signedMessage = await signer?.signMessage(nonce);
    console.log({ signedMessage });
    let new_sign_in: {
      account: string | null | undefined;
      jwt: any;
    };
    const _sign_in = async (): Promise<Record<'access' | 'refresh', string>> => {
      const token = await ob_rpc_call('/api/v1/auth/sign_in', 'POST',
        JSON.stringify({
          wallet: _account,
          signature: signedMessage,
        }));
      new_sign_in = { account: _account, jwt: token.data };
      try {
        const accessToken:any = jwt_decode(token.data.access);
        const refreshToken:any = jwt_decode(token.data.refresh);
        console.log('access expires on %s', new Date(accessToken.exp * 1000));
        console.log('refresh expires on %s', new Date(refreshToken.exp * 1000));
      } catch (e) {

      }
      setJWT({ account, jwt: token.data });
      setSignInAt(Date.now());
      localStorage.setItem('account', _account);
      localStorage.setItem('accessToken', token.data.access);
      localStorage.setItem('refreshToken', token.data.refresh);
      return token.data;
    };
    const _sign_up = async () => {
      await ob_rpc_call('/api/v1/auth/sign_up', 'POST',
        JSON.stringify({
          wallet: account,
          signature: signedMessage,
          login: account,
        }));
    };
    _sign_in()
      .then(async (token) => {
        // testing not needed to do it here
        // const newToken = await refresh_token(account, token.refresh);
        // const x =await sendMessage(account, token);
        // console.log(x);
      })
      .catch(async (e) => {
        console.log(e);
        if (e.response && e.response.data) {
          const ecode = e.response.data.code;
          const { message } = e.response.data;
          console.log(ecode, message);
        }
        if (!new_sign_in) {
          console.log('sign in failed, try sign-up first');
          _sign_up()
            .then(async () => {
              try {
                await _sign_in();
              } catch (e1) {
                console.log('final sign in error', e1);
              }
            })
            .catch((e2) => {
              console.log('sign up error', e2);
            });
        }
      });
  }, [provider, pre_signed]);

  useEffect(() => {
    // console.log(active, account, jwt);
    if (active && account && jwt.account !== account) {
      sign_in(account).catch((e) => { });
    } else {
      // console.log(account, jwt.account);
    }
  }, [account, active, provider, chainId, jwt, sign_in]);

  useEffect(() => {
    console.log(`connecting to metamask ${account} ${provider} ${chainId} ${provider?.getSigner()}`);
    const connection = (account && provider && chainId && _connectionByChainId(provider, provider.getSigner(account), chainId, { account }))
      || undefined;
    const _optionBlitz = connection && connection.contracts && new OptionBlitz(connection);

    if (_optionBlitz) {
      console.log('connection to optionblitz contracts established');
      const _store = _optionBlitz?.store;
      setOptionBlitz(_optionBlitz);
      if (_store) {
        console.log('store object created');
        _store.onLoaded = () => setStore(_store);
        const stop = _store.start();
        console.log('start store tracking');
        return () => {
          console.log('unmount store');
          _store.onLoaded = undefined;
          setStore(undefined);
          stop();
        };
      }
    }
  }, [account, active, provider, chainId]);

  useEffect(() => {
    console.log('create price feed stream');
    const stop = priceFeed.start();
    // const forex = pricefeed.subscribe("forex",["GBP/USD", "XAU/USD"]).catch(e=>{ console.log(e)});
    // const forex = pricefeed.subscribe("forex",["GBP_USD"]).catch(e=>{ console.log(e)});
    // const crypto = priceFeed.subscribe("crypto",["BTC_USD", "XRP_USD"]).catch(e=>{});
    return () => {
      console.log('unmount pricefeed stream');
      stop();
    };
  }, []);

  return (
    <OptionBlitzContext.Provider value={{
      jwt, account, provider, chainId, optionBlitz, priceFeed, signInAt, backend, 
    }}
    >
      {children}
      {/* <OptionBlitzStoreProvider store={store}>
      </OptionBlitzStoreProvider> */}
    </OptionBlitzContext.Provider>
  );
};

export const useOptionBlitz = () => {
  const optionBlitzContext = useContext(OptionBlitzContext);

  if (!optionBlitzContext) {
    throw new Error('You must provide a OptionBlitzContext via OptionBlitzProvider');
  }

  return optionBlitzContext;
};
