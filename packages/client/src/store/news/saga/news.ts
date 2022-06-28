import { call, put } from 'redux-saga/effects';
import { getNews, getNewsFail, getNewsSuccess } from '../actionCreators';

export function* News() {
  try {
    // @ts-ignore
    const response = yield call(getNews);
    yield put(getNewsSuccess(response));
  } catch (error) {
    yield put(getNewsFail(error));
  }
}
