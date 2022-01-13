import { MiddlewareAPI } from 'redux';
import { State } from '../types/store';
import { authRefresh } from './auth/api';
import { authSetTokens } from './auth/actionCreators';

export const refreshTokens = async (store: MiddlewareAPI<any, State>) => {
  const { refresh: token } = store.getState().auth.tokens;
  const { data: { access, refresh } } = await authRefresh(token);
  store.dispatch(authSetTokens(access, refresh));
  return access;
};
