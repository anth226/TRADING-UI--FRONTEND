import { takeEvery } from 'redux-saga/effects';
import { OracleActionTypes } from '../actionTypes';
import { Symbols } from './news';

export default function* oracleSaga() {
  yield takeEvery(OracleActionTypes.GetAllSymbols, Symbols);
}
