import { call, put } from 'redux-saga/effects';
import {
  authSetTokens,
  getAllPosts,
  getPostsFail,
  getPostsSuccess,
} from '../actionCreators';

export function* authLogoutSaga() {
  yield put(authSetTokens('', ''));
}
/// ////TESTNG //////////////
export function* fetchPosts() {
  try {
    const response = yield call(getAllPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error));
  }
}
/// ////TESTNG //////////////
