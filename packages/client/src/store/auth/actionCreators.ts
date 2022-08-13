import { AuthState } from '../../types/store/auth';
import { AuthActionTypes } from './actionsTypes';
import { ApiPaths } from '../../utils/api/constants';
import { put } from '../../http';

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

// @ts-ignore
export const preSigned = (data) => put(ApiPaths.PreSigned, data);

export const getPreSigned = (payload: any) => ({
  type: AuthActionTypes.PreSigned,
  payload,
});

export const getPreSignedSuccess = (payload: any) => ({
  type: AuthActionTypes.PreSignedSuccess,
  payload,
});

export const getPreSignedFail = (payload: any) => ({
  type: AuthActionTypes.PreSignedFail,
  payload,
});

export const authRefresh = () => ({ type: AuthActionTypes.Refresh });
