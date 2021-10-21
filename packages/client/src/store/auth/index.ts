import createReducer from '@option-blitz/libs/utils/createReducer';
import { AuthState } from '../../types/store/auth';
import { authHandlers } from './handlers';

export const authInitialState: Readonly<AuthState> = {
  tokens: {
    access: '',
    refresh: '',
  },
};

export default createReducer(authInitialState, authHandlers);
