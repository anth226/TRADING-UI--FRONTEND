import { takeEvery } from 'redux-saga/effects';
import { VideoActionTypes } from '../actionTypes';
import { getVideo } from './video';

export default function* videoSaga() {
  yield takeEvery(VideoActionTypes.GetAllVideo, getVideo);
}
