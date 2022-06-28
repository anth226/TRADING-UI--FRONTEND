import { takeEvery } from 'redux-saga/effects';
import { AffiliateActionTypes } from '../actionTypes';
import { getAffiliate } from '../actionCreators';

export default function* affiliateSaga() {
  yield takeEvery(AffiliateActionTypes.GetAllData, getAffiliate);
}
