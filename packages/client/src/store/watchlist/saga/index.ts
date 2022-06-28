import { takeEvery } from 'redux-saga/effects';
import { WatchlistActionTypes } from '../actionTypes';
import { getItem } from './watchlist';

export default function* WatchListSaga() {
  yield takeEvery(WatchlistActionTypes.GetAllItems, getItem);
}
