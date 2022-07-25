import { call, put } from 'redux-saga/effects';
import { getSignalsFail, getSignalsSuccess } from '../actionCreators';

export function* getSignals() {
  try {
    // @ts-ignore
    const response = yield call(getAllSignals);
    yield put(getSignalsSuccess(response));
  } catch (error) {
    yield put(getSignalsFail(error));
  }
}
