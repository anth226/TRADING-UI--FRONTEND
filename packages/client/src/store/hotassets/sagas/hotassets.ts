import { call, put } from 'redux-saga/effects';
import { getAllAssets, getAssetsFail, getAssetsSuccess } from '../actionCreators';

export function* getAssets() {
  try {
    // @ts-ignore
    const response = yield call(getAllAssets);
    yield put(getAssetsSuccess(response));
  } catch (error) {
    yield put(getAssetsFail(error));
  }
}
