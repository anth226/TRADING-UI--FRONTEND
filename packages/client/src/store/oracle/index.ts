import createReducer from '@option-blitz/libs/utils/createReducer';
import { oracleHandlers } from './handlers';
import { OracleState } from '../../types/store/oracle';

export const oracleInitialState: Readonly<OracleState> = {
  symbols: {},
  errors: {},
  lastQuote: {},
};

export default createReducer(oracleInitialState, oracleHandlers);
