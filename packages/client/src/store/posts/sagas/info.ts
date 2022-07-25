import { call, put } from 'redux-saga/effects';
import { getAllInfo, getInfoFail, getInfoSuccess } from '../actionCreators';

export function* getPosts() : any {
  try {
    // @ts-ignore
    const response = yield call(getAllInfo);
    yield put(getInfoSuccess(response));
  } catch (error) {
    yield put(getInfoFail(error));
  }
}
