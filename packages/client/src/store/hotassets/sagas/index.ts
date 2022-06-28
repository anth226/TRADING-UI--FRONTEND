import { takeEvery } from 'redux-saga/effects';
import { HotAssetsActionTypes } from '../actionTypes';
import { getAssets } from './hotassets';

export default function* hotassetsSaga() {
  yield takeEvery(HotAssetsActionTypes.GetAllAssets, getAssets);
}
