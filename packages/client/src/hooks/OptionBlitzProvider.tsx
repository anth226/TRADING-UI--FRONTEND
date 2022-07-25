import React, {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';
import { Provider } from '@ethersproject/abstract-provider';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import axios, { Method } from 'axios';

type OptionBlitzProviderProps = {
  loader?: React.ReactNode;
  children?: React.ReactNode;
};

type OptionBlitzContextValue = {
  account: string | undefined | null;
  provider: Provider | undefined;
  chainId: number | undefined;
  jwt: any;
};

const OptionBlitzContext = createContext<OptionBlitzContextValue | undefined>(undefined);

const getRpcEndpoint = () => 'https://optionblitz1.us-east-2.elasticbeanstalk.com';

// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
const ob_rpc_call = async (func: string, method: Method, data: string, headers?: Record<string, string>) => axios({
  url: getRpcEndpoint() + func,
  method,
  data,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...headers,
  },
});
export const OptionBlitzProvider: React.FC<OptionBlitzProviderProps> = ({
  children,
  // loader,
}) => {
  const [jwt, setJWT] = useState<{
    account: string | undefined | null;
    jwt: any;
  }>({ account: '', jwt: {} });
  const {
    library: provider, active, account, chainId,
  } = useWeb3React<Web3Provider>();
  console.log(active, account, account);
  // can use the same otp so long the call is not done again
  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-shadow
  const pre_signed = useCallback(async (account: string): Promise<string> => {
    const otp = await ob_rpc_call('/api/v1/auth/pre_signed', 'PUT',
      JSON.stringify({
        wallet: account,
      }));
    return otp.data.nonce;
  }, []);
  // just same of refreshing token
  // const refresh_token = useCallback(async (account: string, refreshToken: string) => {
  //   const token = await ob_rpc_call('/api/v1/auth/refresh', 'POST',
  //     '{}', {
  //       Authorization: `Bearer ${refreshToken}`,
  //     });
  //   console.log(token.data);
  //   setJWT({ account, jwt: token.data });
  //   return token.data;
  // }, []);

  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-shadow
  const sign_in = useCallback(async (account: string) => {
    const nonce = await pre_signed(account);
    const signer = provider?.getSigner();
    const signedMessage = await signer?.signMessage(nonce);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let new_sign_in: {
      account: string | null | undefined;
      jwt: any;
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _sign_in = async (): Promise<Record<'access' | 'refresh', string>> => {
      const token = await ob_rpc_call('/api/v1/auth/sign_in', 'POST',
        JSON.stringify({
          wallet: account,
          signature: signedMessage,
        }));
      new_sign_in = { account, jwt: token.data };
      setJWT({ account, jwt: token.data });
      return token.data;
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _sign_up = async () => {
      await ob_rpc_call('/api/v1/auth/sign_up', 'POST',
        JSON.stringify({
          wallet: account,
          signature: signedMessage,
          login: account,
        }));
    };
    _sign_in()
      .then(async () => {
        // testing not needed to do it here  async (token)
        // const newToken = await refresh_token(account, token.refresh);  
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
                // eslint-disable-next-line @typescript-eslint/no-shadow
              } catch (e) {
                console.log('final sign in error', e);
              }
            })
            // eslint-disable-next-line @typescript-eslint/no-shadow
            .catch((e) => {
              console.log('sign up error', e);
            });
        }
      });
  }, [account, provider, pre_signed]);

  useEffect(() => {
    console.log(active, account, jwt);
    if (active && account && jwt.account !== account) {
      sign_in(account).catch(() => { });
    } else {
      console.log(account, jwt.account);
    }
  }, [account, active, jwt, sign_in]);
  return (
    <OptionBlitzContext.Provider value={{
      jwt, account, provider, chainId, 
    }}
    >
      {children}
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
