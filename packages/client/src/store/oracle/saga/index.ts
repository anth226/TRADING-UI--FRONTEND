import { takeEvery } from 'redux-saga/effects';
import { OracleActionTypes } from '../actionTypes';
// eslint-disable-next-line import/no-duplicates
import { Symbols } from './news';
// eslint-disable-next-line import/no-duplicates
import { _LastQuote, _SymbolDetail } from './lastQuote';

export default function* oracleSaga() {
  yield takeEvery(OracleActionTypes.GetAllSymbols, Symbols);
  // @ts-ignore
  yield takeEvery(OracleActionTypes.GetLastQuote, _LastQuote);
  // @ts-ignore
  yield takeEvery(OracleActionTypes.GetSymbolDetail, _SymbolDetail);
}
