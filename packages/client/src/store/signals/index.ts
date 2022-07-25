import createReducer from '@option-blitz/libs/utils/createReducer';
import { SignalsState } from '../../types/store/signals';
import { signalsHandlers } from './handlers';

export const signalsInitialState: Readonly<SignalsState> = {
  signals: [],
};

export default createReducer(signalsInitialState, signalsHandlers);
