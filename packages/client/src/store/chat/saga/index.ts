import { takeEvery } from 'redux-saga/effects';
import { ChatActionTypes } from '../actionTypes';
import { sendPrivateMessage } from './chat';

export default function* chatSaga() {
  yield takeEvery(ChatActionTypes.SendPrivateMessage, sendPrivateMessage);
}
