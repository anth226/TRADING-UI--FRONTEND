import { takeEvery } from 'redux-saga/effects';
import { OracleActionTypes } from '../actionTypes';
// eslint-disable-next-line import/no-duplicates
import { Symbols } from './news';
// eslint-disable-next-line import/no-duplicates
import { _LastQuote } from './lastQuote';

export default function* oracleSaga() {
  yield takeEvery(OracleActionTypes.GetAllSymbols, Symbols);
  yield takeEvery(OracleActionTypes.GetLastQuote, _LastQuote);
}
