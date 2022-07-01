import { takeEvery } from 'redux-saga/effects';
import { AlertsActionTypes } from '../actionTipes';
import { getListAlerts } from '../actionCreators';

export default function* alertSaga() {
  yield takeEvery(AlertsActionTypes.GetListAlerts, getListAlerts);
}
