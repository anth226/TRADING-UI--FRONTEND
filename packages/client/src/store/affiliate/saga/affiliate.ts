import { call, put } from 'redux-saga/effects';
import {
  addCampaigns, addCampaignsFail, addCampaignsSuccess,
  CreatePromoCodes, CreatePromoCodesFail, CreatePromoCodesSuccess,
  DeletePromoCodes, DeletePromoCodesFail, DeletePromoCodesSuccess,
  getAffiliateFail,
  getAffiliateSuccess,
  getAllPromoCodes, getAllPromoCodesFail, getAllPromoCodesSuccess,
} from '../actionCreators';

export function* getAffiliate() {
  try {
    // @ts-ignore
    const response = yield call(getAllAffiliate);
    yield put(getAffiliateSuccess(response));
  } catch (error) {
    yield put(getAffiliateFail(error));
  }
}

export function* getPromoCodes() {
  try {
    // @ts-ignore
    const response = yield call(getAllPromoCodes);
    yield put(getAllPromoCodesSuccess(response));
  } catch (error) {
    yield put(getAllPromoCodesFail(error));
  }
}

export function* createPromo() {
  try {
    // @ts-ignore
    const response = yield call(CreatePromoCodes);
    yield put(CreatePromoCodesSuccess(response));
  } catch (error) {
    yield put(CreatePromoCodesFail(error));
  }
}

export function* deletePromo() {
  try {
    // @ts-ignore
    const response = yield call(DeletePromoCodes);
    // @ts-ignore
    yield put(DeletePromoCodesSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(DeletePromoCodesFail);
  }
}

export function* addedCampaigns() {
  try {
    // @ts-ignore
    const response = yield call(addCampaigns);
    // @ts-ignore
    yield put(addCampaignsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(addCampaignsFail(error));
  }
}
