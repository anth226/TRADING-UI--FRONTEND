import { call, put } from 'redux-saga/effects';
import {
  getAllSymbols,
  getSymbolsSuccess,
  getSymbolsFail,
} from '../actionCreators';

export function* Symbols() {
  try {
    // @ts-ignore
    const response = yield call(getAllSymbols);
    yield put(getSymbolsSuccess(response));
  } catch (error) {
    yield put(getSymbolsFail(error));
  }
}
