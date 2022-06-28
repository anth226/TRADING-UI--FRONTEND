import { takeEvery } from 'redux-saga/effects';
import { NewsActionTypes } from '../actionTypes';
import { News } from './news';

export default function* newsSaga() {
  yield takeEvery(NewsActionTypes.GetAllData, News);
}
