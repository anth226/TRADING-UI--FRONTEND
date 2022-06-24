import { takeEvery } from 'redux-saga/effects';
import { PostActionTypes } from '../actionTypes';
import { getPosts } from './info';

export default function* postsSaga() {
  yield takeEvery(PostActionTypes.GetAllInfo, getPosts);
}
