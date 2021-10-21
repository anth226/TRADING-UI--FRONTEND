import { RehydrateAction } from 'redux-persist/es/types';
import { put } from 'redux-saga/effects';
import { PersistKeys } from '../../../constants/persist';
import { authReady } from '../actionCreators';

export function* authRehydrateSaga({ key }: RehydrateAction) {
  if (key !== PersistKeys.Auth) {
    return;
  }

  yield put(authReady());
}
