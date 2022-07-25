import { call, put } from 'redux-saga/effects';
import { getAllNews, getNewsFail, getNewsSuccess } from '../actionCreators';

export function* News() {
  try {
    // @ts-ignore
    const response = yield call(getAllNews);
    yield put(getNewsSuccess(response));
  } catch (error) {
    yield put(getNewsFail(error));
  }
}
