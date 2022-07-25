import { takeEvery, takeLeading } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/es/constants';
import { AuthActionTypes } from '../actionsTypes';
import { authLogoutSaga } from './logout';
import { authRehydrateSaga } from './rehydrate';
import { authOnRefreshSaga } from './refresh';
import { _preSigned } from './preSigned';

export default function* authSaga() {
  yield takeEvery(REHYDRATE, authRehydrateSaga);
  yield takeLeading(AuthActionTypes.Logout, authLogoutSaga);
  yield takeLeading(AuthActionTypes.Refresh, authOnRefreshSaga);
  // @ts-ignore
  yield takeEvery(AuthActionTypes.PreSigned, _preSigned);
}
