import { call, put } from 'redux-saga/effects';
import { getAllInfo, getInfoFail, getInfoSuccess } from '../actionCreators';

export function* getPosts() {
  try {
    // @ts-ignore
    const response = yield call(getAllInfo);
    yield put(getInfoSuccess(response));
  } catch (error) {
    yield put(getInfoFail(error));
  }
}
