import { AuthState } from '../../types/store/auth';
import { AuthActionTypes } from './actionsTypes';

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

export const authRefresh = () => ({ type: AuthActionTypes.Refresh });
