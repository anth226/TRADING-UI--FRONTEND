import createReducer from '@option-blitz/libs/utils/createReducer';
import { AuthState } from '../../types/store/auth';
import { authHandlers } from './handlers';

// @ts-ignore
export const authInitialState: Readonly<AuthState> = {
  tokens: {
    access: '',
    refresh: '',
  },
  /// ////TESTNG //////////////
  posts: [],
  /// ////TESTNG //////////////
};

export default createReducer(authInitialState, authHandlers);
