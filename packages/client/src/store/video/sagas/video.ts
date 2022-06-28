import { call, put } from 'redux-saga/effects';
import { getVideoFail, getVideoSuccess } from '../actionCreators';

export function* getVideo() {
  try {
    // @ts-ignore
    const response = yield call(getAllVideo);
    yield put(getVideoSuccess(response));
  } catch (error) {
    yield put(getVideoFail(error));
  }
}
