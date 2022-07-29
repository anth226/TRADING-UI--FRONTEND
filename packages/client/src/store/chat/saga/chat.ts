import { call, put } from 'redux-saga/effects';
import {
  PostMessageFail,
  PostMessageSuccess,
  SendMessage,

  PostPrivateMessageFail,
  PostPrivateMessageSuccess,
  SendPrivateMessage,
} from '../actionCreators';

export function* sendPrivateMessage(data: any) {
  try {
    // @ts-ignore
    const response = yield call(SendPrivateMessage, data);
    yield put(PostPrivateMessageSuccess(response));
  } catch (error) {
    yield put(PostPrivateMessageFail(error));
  }
}

// @ts-ignore
export function* sendMessage(data) {
  try {
    // @ts-ignore
    const response = yield call(SendMessage, data.text);
    yield put(PostMessageSuccess(response));
  } catch (error) {
    yield put(PostMessageFail(error));
  }
}
