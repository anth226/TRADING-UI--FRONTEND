import { takeEvery } from 'redux-saga/effects';
import { ChatActionTypes } from '../actionTypes';
import { sendMessage, sendPrivateMessage } from './chat';

export default function* chatSaga() {
  yield takeEvery(ChatActionTypes.SendPrivateMessage, sendPrivateMessage);
  yield takeEvery(ChatActionTypes.SendMessage, sendMessage);
}
