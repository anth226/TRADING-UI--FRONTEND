import { call, put } from 'redux-saga/effects';
import { getLastQuoteFail, getLastQuoteSuccess, LastQuote } from '../actionCreators';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/naming-convention
export function* _LastQuote() {
  try {
    // @ts-ignore
    const response = yield call(LastQuote);
    yield put(getLastQuoteSuccess(response));
  } catch (error) {
    yield put(getLastQuoteFail(error));
  }
}
