import {
  applyMiddleware, combineReducers, compose, createStore, 
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';
import reducer from './rootReducer';
import rootSaga from './rootSaga';
import { PersistKeys } from '../constants/persist';
import { AuthState } from '../types/store/auth';

const sagaMiddleware = createSagaMiddleware();

const authPersistConfig = {
  key: PersistKeys.Auth,
  storage,
  whitelist: ['tokens'] as Array<keyof AuthState>,
};

const reducers = {
  ...reducer,
  auth: persistReducer(authPersistConfig, reducer.auth),
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

export default (initialState: { [key: string]: never } = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    window.__REDUX_DEVTOOLS_EXTENSION__ ||
    compose;

  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
};
