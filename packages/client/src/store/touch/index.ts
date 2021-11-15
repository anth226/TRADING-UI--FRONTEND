import createReducer from '@option-blitz/libs/utils/createReducer';
import { TouchState } from '../../types/store/touch';
import { touchHandlers } from './handlers';

const initialState: Readonly<TouchState> = {
  putPrice: 431,
  callPrice: 432,
  callCheck: true,
  putCheck: true,
};

export default createReducer(initialState, touchHandlers);
