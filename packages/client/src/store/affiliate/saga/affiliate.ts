import { call, put } from 'redux-saga/effects';
import {
  addCampaigns, addCampaignsFail, addCampaignsSuccess,
  addTHXCampaigns, addTHXCampaignsFail, addTHXCampaignsSuccess,
  createPromoCodes, createPromoCodesFail, createPromoCodesSuccess,
  deleteCampaign, deleteCampaignsFail, deleteCampaignSuccess,
  deletePromoCodes, deletePromoCodesFail, deletePromoCodesSuccess,
  deleteTHXCampaignFail, deleteTHXCampaigns, deleteTHXCampaignsSuccess,
  getAffiliateFail, getAffiliateSuccess,
  getAllPromoCodes, getAllPromoCodesFail, getAllPromoCodesSuccess,
  getCampaigns, getCampaignsFail, getCampaignsSuccess,
  getTHXCampaigns, getTHXCampaignsFail, getTHXCampaignsSuccess,
  updateCampaignFail, updateCampaigns, updateCampaignSuccess,
  updatePromoCodes, updatePromoCodesFail, updatePromoCodesSuccess,
  updateTHXCampaigns, updateTHXCampaignsFail, updateTHXCampaignsSuccess,
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
    const response = yield call(createPromoCodes);
    yield put(createPromoCodesSuccess(response));
  } catch (error) {
    yield put(createPromoCodesFail(error));
  }
}

export function* deletePromo() {
  try {
    // @ts-ignore
    const response = yield call(deletePromoCodes);
    // @ts-ignore
    yield put(deletePromoCodesSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(deletePromoCodesFail(error));
  }
}

export function* updatePromo() {
  try {
    // @ts-ignore
    const response = yield call(updatePromoCodes);
    // @ts-ignore
    yield put(updatePromoCodesSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(updatePromoCodesFail(error));
  }
}

export function* getCampaign() {
  try {
    // @ts-ignore
    const response = yield call(getCampaigns);
    // @ts-ignore
    yield put(getCampaignsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(getCampaignsFail(error));
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

export function* updateCampaign() {
  try {
    // @ts-ignore
    const response = yield call(updateCampaigns);
    // @ts-ignore
    yield put(updateCampaignSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(updateCampaignFail(error));
  }
}

export function* deleteCampaigns() {
  try {
    // @ts-ignore
    const response = yield call(deleteCampaign);
    // @ts-ignore
    yield put(deleteCampaignSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(deleteCampaignsFail(error));
  }
}

export function* getTHXCampaign() {
  try {
    // @ts-ignore
    const response = yield call(getTHXCampaigns);
    // @ts-ignore
    yield put(getTHXCampaignsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(getTHXCampaignsFail(error));
  }
}

export function* addTHXCampaign() {
  try {
    // @ts-ignore
    const response = yield call(addTHXCampaigns);
    // @ts-ignore
    yield put(addTHXCampaignsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(addTHXCampaignsFail(error));
  }
}

export function* updateTHXCampaign() {
  try {
    // @ts-ignore
    const response = yield call(updateTHXCampaigns);
    // @ts-ignore
    yield put(updateTHXCampaignsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(updateTHXCampaignsFail(error));
  }
}

export function* deleteTHXCampaign() {
  try {
    // @ts-ignore
    const response = yield call(deleteTHXCampaigns);
    // @ts-ignore
    yield put(deleteTHXCampaignsSuccess(response));
  } catch (error) {
    // @ts-ignore
    yield put(deleteTHXCampaignFail(error));
  }
}
