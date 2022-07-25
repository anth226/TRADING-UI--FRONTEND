import { call, put } from 'redux-saga/effects';
import {
  getPreSignedFail,
  getPreSignedSuccess,
  // putPreSigned,
  preSigned,
} from '../actionCreators';

// eslint-disable-next-line @typescript-eslint/naming-convention
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/naming-convention
export function* _preSigned({ payload: data }) {
  // eslint-disable-next-line no-console
  try {
    // @ts-ignore
    const response = yield call(preSigned, data);
    // eslint-disable-next-line no-console
    console.log({ response });
    yield put(getPreSignedSuccess(response));
  } catch (error) {
    yield put(getPreSignedFail(error));
  }
}
