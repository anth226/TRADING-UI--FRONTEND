/* eslint-disable */
//@ts-nocheck
import { fork, all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import newsSaga from './news/saga';
import oracleSaga from './oracle/saga'
import chatSaga from './chat/saga'

export default function* rootSaga() {
  yield all ([
    fork(authSaga),
    fork(newsSaga),
    fork(oracleSaga),
    fork(chatSaga),
  ])

}
