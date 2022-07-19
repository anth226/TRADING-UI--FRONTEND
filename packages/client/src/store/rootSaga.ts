/* eslint-disable */
//@ts-nocheck
import { fork, all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import postsSaga from './posts/sagas';
import newsSaga from './news/saga';

export default function* rootSaga() {
  yield all ([
    fork(authSaga),
    fork(postsSaga),
    fork(newsSaga),
  ])

}
