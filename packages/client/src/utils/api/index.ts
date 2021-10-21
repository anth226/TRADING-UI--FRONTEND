import { configureApi } from '@project/libs/utils/api';
import { hasPath } from 'ramda';
import assocPath from 'ramda/es/assocPath';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { MiddlewareAPI } from 'redux';
import { refreshTokens } from '../../store/refresh';
import { authLogout } from '../../store/auth/actionCreators';
import { ApiPaths } from './constants';
import { State } from '../../types/store';

export const api = configureApi(process.env.REACT_APP_API_URL);

/**
 * Handles Bearer authorization and token refresh with store
 * @param store
 */
export const useAPIInterceptors = (store: MiddlewareAPI<any, State>) => {
  // Pass token to axios
  api.interceptors.request.use((options: AxiosRequestConfig): AxiosRequestConfig => {
    const token = store.getState().auth.tokens.access;

    if (
      !token ||
      options.url === ApiPaths.AuthRefresh ||
      hasPath(['headers', 'authorization'], options)
    ) {
      return options;
    }

    return assocPath(['headers', 'authorization'], `Bearer ${token}`, options);
  });

  // Refresh on 401
  api.interceptors.response.use(undefined, async (error: AxiosError<{}>) => {
    const { refresh } = store.getState().auth.tokens;

    if (
      error.response?.status === 401 &&
      refresh &&
      error.config.url !== ApiPaths.AuthRefresh
    ) {
      const originalRequest = error.config;

      try {
        // try to refresh token
        const access = await refreshTokens(store);
        originalRequest.headers.authorization = `Bearer ${access}`;
        return await api(originalRequest);
      } catch (e) {
        store.dispatch(authLogout());
        // throw original error
        throw error;
      }
    }

    throw error;
  });
};
