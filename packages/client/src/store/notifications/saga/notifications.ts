import { call, put } from 'redux-saga/effects';
import { getListData, getListDataFail, getListDataSuccess } from '../actionCreators';

export function* notificationsList() {
  try {
    // @ts-ignore
    const response = yield call(getListData);
    // @ts-ignore
    yield put(getListDataSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(getListDataFail(error));
  }
}
