import { ActionFn } from '@option-blitz/libs/types/redux';
import { assocPath } from 'ramda';
import { AuthState } from '../../types/store/auth';
import { authSetState } from './actionCreators';
import { AuthActionTypes } from './actionsTypes';

type AuthHandlerFn<F extends (...args: any[]) => any> = ActionFn<AuthState, ReturnType<F>>;

const setState: AuthHandlerFn<typeof authSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const setTokens: AuthHandlerFn<typeof authSetState> = (
  state,
  { payload },
) => assocPath(['tokens'], { ...state.tokens, ...payload }, state);

export const authHandlers = {
  [AuthActionTypes.SetState]: setState,
  [AuthActionTypes.SetTokens]: setTokens,
};
