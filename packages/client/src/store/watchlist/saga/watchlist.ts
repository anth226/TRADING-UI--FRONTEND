import { call, put } from 'redux-saga/effects';
import {
  addItemFail,
  addItems,
  addItemsSuccess, deleteItem, deleteItemFail,
  deleteItemSuccess,
  getItems, getItemsFail, getItemsSuccess,
} from '../actionCreators';

export function* getItem() {
  try {
    // @ts-ignore
    const response = yield call(getItems);
    // @ts-ignore
    yield put(getItemsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(getItemsFail(error));
  }
}

export function* addItem() {
  try {
    // @ts-ignore
    const response = yield call(addItems);
    // @ts-ignore
    yield put(addItemsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(addItemFail(error));
  }
}

export function* deleteItems() {
  try {
    // @ts-ignore
    const response = yield call(deleteItem);
    // @ts-ignore
    yield put(deleteItemSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(deleteItemFail(error));
  }
}
