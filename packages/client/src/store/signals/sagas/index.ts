import { takeEvery } from 'redux-saga/effects';
import { SignalsActionTypes } from '../actionTypes';
import { getSignals } from '../actionCreators';

export default function* signalsSaga() {
  yield takeEvery(SignalsActionTypes.GetAllData, getSignals);
}
