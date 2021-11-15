import createReducer from '@option-blitz/libs/utils/createReducer';
import { ClassicState } from '../../types/store/classic';
import { classicHandlers } from './handlers';

export const initialState: Readonly<ClassicState> = {
  targetPrice: 431,
  takeProfitCheck: true,
};

export default createReducer(initialState, classicHandlers);
