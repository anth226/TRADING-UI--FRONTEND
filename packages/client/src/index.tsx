import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'i18n';
import configureStore from 'store/configureStore';
import { history } from '@project/libs/utils';
import { App } from 'containers/app/App';
import '@project/libs/assets/index.scss';
import { PersistGate } from 'redux-persist/integration/react';

const config = configureStore();
export const { store, persistor } = config;
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  root,
);
