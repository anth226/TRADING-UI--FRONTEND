/* eslint-disable */
/* ts-disable */
import { call, put } from 'redux-saga/effects';
import {
  getLastQuoteFail,
  getLastQuoteSuccess, getSymbolDetailFail,
  getSymbolDetailSuccess,
  LastQuote,
  SymbolDetail,
} from '../actionCreators';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/naming-convention
export function* _LastQuote({payload: item}) {
  try {
    // @ts-ignore
    const response = yield call(LastQuote, item);
    yield put(getLastQuoteSuccess(response));
  } catch (error) {
    yield put(getLastQuoteFail(error));
  }
}

// @ts-ignore
export function* _SymbolDetail({payload: item}) {
  try {
    // @ts-ignore
    const response = yield call(SymbolDetail, item);
    yield put(getSymbolDetailSuccess(response));
  } catch (error) {
    yield put(getSymbolDetailFail(error));
  }
}
