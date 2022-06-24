import { get } from 'http';
import { AuthState } from '../../types/store/auth';
import { AuthActionTypes } from './actionsTypes';
import { ApiPaths } from '../../utils/api/constants';

export const authReady = () => ({ type: AuthActionTypes.Ready });

export const authSetState = (payload: Partial<AuthState>) => ({
  type: AuthActionTypes.SetState,
  payload,
});

export const authSetTokens = (access: string, refresh: string) => ({
  type: AuthActionTypes.SetTokens,
  payload: { access, refresh },
});

export const authLogout = (payload?: { reason?: string }) => ({
  type: AuthActionTypes.Logout,
  payload,
});

/// ////TESTNG ACTION //////////////
export const getAllPosts = () => get(ApiPaths.FetchPostsUrl);

export const getPosts = (payload: any) => ({
  type: AuthActionTypes.FetchPosts,
  payload,
});

export const getPostsSuccess = (payload: any) => ({
  type: AuthActionTypes.FetchPostsSuccess,
  payload,
});

export const getPostsFail = (payload: any) => ({
  type: AuthActionTypes.FetchPostsFail,
  payload,
});
/// ////TESTNG ACTION //////////////
export const authRefresh = () => ({ type: AuthActionTypes.Refresh });
