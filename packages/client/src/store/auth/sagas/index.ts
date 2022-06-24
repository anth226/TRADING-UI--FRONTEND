import { takeEvery, takeLeading } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/es/constants';
import { AuthActionTypes } from '../actionsTypes';
import { authLogoutSaga, fetchPosts } from './logout';
import { authRehydrateSaga } from './rehydrate';
import { authOnRefreshSaga } from './refresh';

export default function* authSaga() {
  yield takeEvery(REHYDRATE, authRehydrateSaga);
  yield takeLeading(AuthActionTypes.Logout, authLogoutSaga);
  yield takeLeading(AuthActionTypes.Refresh, authOnRefreshSaga);
  /// ////TESTNG //////////////
  yield takeEvery(AuthActionTypes.FetchPosts, fetchPosts);
  /// ////TESTNG //////////////
}
