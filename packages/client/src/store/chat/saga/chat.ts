import { call, put } from 'redux-saga/effects';
import {
  createMessage, createMessageFail, createMessageSuccess,
  deleteChat, deleteChatFail, deleteChatSuccess,
  deleteMessage, deleteMessageFail, deleteMessageSuccess,
  getAllChat,
  getChatFail, getChatSuccess,
  getMessage, getMessageFail, getMessageSuccess,
  sendMessage, sendMessageFail, sendMessageSuccess,
  updateMessage, updateMessageFail, updateMessageSuccess,
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

export function* createOneMessage() {
  try {
    // @ts-ignore
    const response = yield call(createMessage);
    yield put(createMessageSuccess(response));
  } catch (error) {
    yield put(createMessageFail(error));
  }
}

export function* readMessage() {
  try {
    // @ts-ignore
    const response = yield call(getMessage);
    yield put(getMessageSuccess(response));
  } catch (error) {
    yield put(getMessageFail(error));
  }
}

export function* updateOneMessage() {
  try {
    // @ts-ignore
    const response = yield call(updateMessage);
    yield put(updateMessageSuccess(response));
  } catch (error) {
    yield put(updateMessageFail(error));
  }
}

export function* deleteOneMessage() {
  try {
    // @ts-ignore
    const response = yield call(deleteMessage);
    yield put(deleteMessageSuccess(response));
  } catch (error) {
    yield put(deleteMessageFail(error));
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
