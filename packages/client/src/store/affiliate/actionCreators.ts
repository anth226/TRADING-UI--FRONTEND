import { AffiliateActionTypes } from './actionTypes';

// export const getAllAffiliate = () => get()

export const getAffiliate = (payload:any) => ({
  type: AffiliateActionTypes.GetAllData,
  payload,
});

export const getAffiliateSuccess = (payload:any) => ({
  type: AffiliateActionTypes.GetAllDataSuccess,
  payload,
});

export const getAffiliateFail = (payload:any) => ({
  type: AffiliateActionTypes.GetAllDataFail,
  payload,
});

export const getAllPromoCodes = (payload:any) => ({
  type: AffiliateActionTypes.GetAllPromoCodes,
  payload,
});

export const getAllPromoCodesSuccess = (payload:any) => ({
  type: AffiliateActionTypes.GetAllPromoCodesSuccess,
  payload,
});

export const getAllPromoCodesFail = (payload:any) => ({
  type: AffiliateActionTypes.GetAllPromoCodesFail,
  payload,
});

export const CreatePromoCodes = (payload:any) => ({
  type: AffiliateActionTypes.CreatePromoCodes,
  payload,
});

export const CreatePromoCodesSuccess = (payload:any) => ({
  type: AffiliateActionTypes.CreatePromoCodesSuccess,
  payload,
});

export const CreatePromoCodesFail = (payload:any) => ({
  type: AffiliateActionTypes.CreatePromoCodesFail,
  payload,
});

export const DeletePromoCodes = (payload:any) => ({
  types: AffiliateActionTypes.DeletePromoCodes,
  payload,
});

export const DeletePromoCodesSuccess = (payload:any) => ({
  types: AffiliateActionTypes.DeletePromoCodesSuccess,
  payload,
});

export const DeletePromoCodesFail = (payload:any) => ({
  types: AffiliateActionTypes.DeletePromoCodesFail,
  payload,
});

export const addCampaigns = (payload:any) => ({
  types: AffiliateActionTypes.AddCampaigns,
  payload,
});

export const addCampaignsSuccess = (payload:any) => ({
  types: AffiliateActionTypes.AddCampaignsSuccess,
  payload,
});

export const addCampaignsFail = (payload:any) => ({
  types: AffiliateActionTypes.AddCampaignsFail,
  payload,
});
