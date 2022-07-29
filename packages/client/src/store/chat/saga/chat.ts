import { call, put } from 'redux-saga/effects';
import {
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
