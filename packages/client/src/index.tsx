import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'i18n';
import configureStore from 'store/configureStore';
import { history } from '@option-blitz/libs/utils';
import { App } from 'containers/app/App';
import '@option-blitz/libs/assets/index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { Web3ReactProvider } from "@web3-react/core";
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";

const config = configureStore();
export const { store, persistor } = config;
const root = document.getElementById('root');

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => new Web3Provider(provider);

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  </Web3ReactProvider>,
  root,
);
