import createReducer from '@option-blitz/libs/utils/createReducer';
import { BalancesState } from '../../types/store/balances';
import { balancesGandlers } from './handlers';

export const balancesState:Readonly<BalancesState> = {
  balances: [],
};

export default createReducer(balancesState, balancesGandlers);
