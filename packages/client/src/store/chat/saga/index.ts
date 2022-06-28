import { takeEvery } from 'redux-saga/effects';
import { ChatActionTypes } from '../actionTypes';
import { getChat } from '../actionCreators';

export default function* chatSaga() {
  yield takeEvery(ChatActionTypes.GetAllData, getChat);
}
