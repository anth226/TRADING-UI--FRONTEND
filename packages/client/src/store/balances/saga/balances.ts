import { call, put } from 'redux-saga/effects';
import {
  createDepositCode, createDepositCodeFail, createDepositCodeSuccess,
  createQRCode, createQRCodeFail, createQRCodeSuccess,
  deleteDepositCode, deleteDepositCodeFail, deleteDepositCodeSuccess,
  deleteQRCode, deleteQRCodeFail, deleteQRCodeSuccess,
  getAllBalancesData, getAllBalancesDataFail, getAllBalancesDataSuccess,
  getBLX, getBLXFail, getBLXSuccess,
  getBonuses, getBonusesFail, getBonusesSuccess,
  getDepositCode, getDepositCodeFail, getDepositCodeSuccess,
  getDepositData, getDepositDataFail, getDepositDataSuccess,
  getHistory, getHistoryFail, getHistorySuccess,
  getQRCode, getQRCodeFail, getQRCodeSuccess,
  getWithraw, getWithrawFail, getWithrawSuccess,
  updateDepositCode, updateDepositCodeFail, updateDepositCodeSuccess,
  updateQRCode, updateQRCodeFail, updateQRCodeSuccess,

} from '../actionCreators';

export function* getBalances() {
  try {
    // @ts-ignore
    const response = yield call(getAllBalancesData);
    yield put(getAllBalancesDataSuccess(response));
  } catch (error) {
    yield put(getAllBalancesDataFail(error));
  }
}

export function* getDeposit() {
  try {
    // @ts-ignore
    const response = yield call(getDepositData);
    yield put(getDepositDataSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(getDepositDataFail);
  }
}

export function* CreateDepositCode() {
  try {
    // @ts-ignore
    const response = yield call(createDepositCode);
    yield put(createDepositCodeSuccess(response));
  } catch (error) {
    yield put(createDepositCodeFail(error));
  }
}

export function* GetDepositCode() {
  try {
    // @ts-ignore
    const response = yield call(getDepositCode);
    yield put(getDepositCodeSuccess(response));
  } catch (error) {
    yield put(getDepositCodeFail(error));
  }
}

export function* UpdateDepositCode() {
  try {
    // @ts-ignore
    const response = yield call(updateDepositCode);
    yield put(updateDepositCodeSuccess(response));
  } catch (error) {
    yield put(updateDepositCodeFail(error));
  }
}

export function* DeleteDepositCode() {
  try {
    // @ts-ignore
    const response = yield call(deleteDepositCode);
    yield put(deleteDepositCodeSuccess(response));
  } catch (error) {
    yield put(deleteDepositCodeFail(error));
  }
}

export function* CreateQRCode() {
  try {
    // @ts-ignore
    const response = yield call(createQRCode);
    yield put(createQRCodeSuccess(response));
  } catch (error) {
    yield put(createQRCodeFail(error));
  }
}

export function* GetQRCode() {
  try {
    // @ts-ignore
    const response = yield call(getQRCode);
    yield put(getQRCodeSuccess(response));
  } catch (error) {
    yield put(getQRCodeFail(error));
  }
}

export function* UpdateQRCode() {
  try {
    // @ts-ignore
    const response = yield call(updateQRCode);
    yield put(updateQRCodeSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(updateQRCodeFail);
  }
}

export function* DeleteQRCode() {
  try {
    // @ts-ignore
    const response = yield call(deleteQRCode);
    yield put(deleteQRCodeSuccess(response));
  } catch (error) {
    yield put(deleteQRCodeFail(error));
  }
}

export function* GetWithraw() {
  try {
    // @ts-ignore
    const response = yield call(getWithraw);
    yield put(getWithrawSuccess(response));
  } catch (error) {
    yield put(getWithrawFail(error));
  }
}

export function* GetHistory() {
  try {
    // @ts-ignore
    const response = yield call(getHistory);
    yield put(getHistorySuccess(response));
  } catch (error) {
    yield put(getHistoryFail(error));
  }
}

export function* GetBonuses() {
  try {
    // @ts-ignore
    const response = yield call(getBonuses);
    yield put(getBonusesSuccess(response));
  } catch (error) {
    yield put(getBonusesFail(error));
  }
}

export function* GetBLX() {
  try {
    // @ts-ignore
    const response = yield call(getBLX);
    yield put(getBLXSuccess(response));
  } catch (error) {
    yield put(getBLXFail(error));
  }
}
