import { assocPath } from 'ramda';
import { HandlerFn } from 'types/handler';
import { AuthState } from '../../types/store/auth';
import { authSetState } from './actionCreators';
import { AuthActionTypes } from './actionsTypes';

const setState: HandlerFn<typeof authSetState, AuthState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const setTokens: HandlerFn<typeof authSetState, AuthState> = (
  state,
  { payload },
) => assocPath(['tokens'], { ...state.tokens, ...payload }, state);

export const authHandlers = {
  [AuthActionTypes.SetState]: setState,
  [AuthActionTypes.SetTokens]: setTokens,
};
