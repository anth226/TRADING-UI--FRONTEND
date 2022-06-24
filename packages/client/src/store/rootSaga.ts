import { fork } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import postsSaga from './posts/sagas';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(postsSaga);
}
