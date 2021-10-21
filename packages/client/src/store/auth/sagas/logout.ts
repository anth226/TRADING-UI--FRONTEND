import { put } from 'redux-saga/effects';
import { authSetTokens } from '../actionCreators';

export function* authLogoutSaga() {
  yield put(authSetTokens('', ''));
}
