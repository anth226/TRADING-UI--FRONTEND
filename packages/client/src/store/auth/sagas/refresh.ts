import { call, put, select } from 'redux-saga/effects';
import { showErrorToast } from '@option-blitz/libs/components/common/Toaster';
import { authLogout, authSetTokens } from '../actionCreators';
import { authRefresh } from '../api';
import { selectAuthTokens } from '../selectors';
import { Unwrap } from '../../../types/unwrap';
import { transformBackendErrorToString } from '../../../utils/api/transforms';

export function* authRefreshCallSaga() {
  const {
    refresh: token,
  }: ReturnType<typeof selectAuthTokens> = yield select(selectAuthTokens);

  const {
    data: { access, refresh },
  }: Unwrap<typeof authRefresh> = yield call(authRefresh, token);

  yield put(authSetTokens(access, refresh));
}

export function* authOnRefreshSaga() {
  try {
    yield call(authRefreshCallSaga);
  } catch (e) {
    showErrorToast(transformBackendErrorToString(e));
    yield put(authLogout());
  }
}
