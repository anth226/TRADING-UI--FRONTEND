import { call, put } from 'redux-saga/effects';
import {
  deleteChat,
  deleteChatFail,
  deleteChatSuccess,
  getAllChat,
  getChatFail,
  getChatSuccess, sendMessage, sendMessageFail, sendMessageSuccess,
} from '../actionCreators';

export function* getChat() {
  try {
    // @ts-ignore
    const response = yield call(getAllChat);
    yield put(getChatSuccess(response));
  } catch (error) {
    yield put(getChatFail(error));
  }
}

export function* deletChat() {
  try {
    // @ts-ignore
    const response = yield call(deleteChat);
    yield put(deleteChatSuccess(response));
  } catch (error) {
    yield put(deleteChatFail(error));
  }
}

export function* sendOneMessage() {
  try {
    // @ts-ignore
    const response = yield call(sendMessage);
    yield put(sendMessageSuccess(response));
  } catch (error) {
    yield put(sendMessageFail(error));
  }
}
