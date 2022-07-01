import { takeEvery } from 'redux-saga/effects';
import { StakingActionTypes } from '../actionTypes';
import { getStakingDataSuccess } from '../actionCreators';

export default function* stakingSaga() {
  yield takeEvery(StakingActionTypes.GetStakingDataSuccess, getStakingDataSuccess);
}
