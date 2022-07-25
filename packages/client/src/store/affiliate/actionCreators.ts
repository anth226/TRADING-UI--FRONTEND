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

export const createPromoCodes = (payload:any) => ({
  type: AffiliateActionTypes.CreatePromoCodes,
  payload,
});

export const createPromoCodesSuccess = (payload:any) => ({
  type: AffiliateActionTypes.CreatePromoCodesSuccess,
  payload,
});

export const createPromoCodesFail = (payload:any) => ({
  type: AffiliateActionTypes.CreatePromoCodesFail,
  payload,
});

export const deletePromoCodes = (payload:any) => ({
  type: AffiliateActionTypes.DeletePromoCodes,
  payload,
});

export const deletePromoCodesSuccess = (payload:any) => ({
  type: AffiliateActionTypes.DeletePromoCodesSuccess,
  payload,
});

export const deletePromoCodesFail = (payload:any) => ({
  types: AffiliateActionTypes.DeletePromoCodesFail,
  payload,
});

export const updatePromoCodes = (payload:any) => ({
  types: AffiliateActionTypes.UpdatePromoCodes,
  payload,
});

export const updatePromoCodesSuccess = (payload:any) => ({
  types: AffiliateActionTypes.UpdatePromoCodesSuccess,
  payload,
});

export const updatePromoCodesFail = (payload:any) => ({
  types: AffiliateActionTypes.UpdatePromoCodesFail,
  payload,
});

export const getCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.GetCampaigns,
  payload,
});

export const getCampaignsSuccess = (payload:any) => ({
  type: AffiliateActionTypes.GetCampaignsSuccess,
  payload,
});

export const getCampaignsFail = (payload:any) => ({
  type: AffiliateActionTypes.GetCampaignsFail,
  payload,
});

export const addCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.AddCampaigns,
  payload,
});

export const addCampaignsSuccess = (payload:any) => ({
  type: AffiliateActionTypes.AddCampaignsSuccess,
  payload,
});

export const addCampaignsFail = (payload:any) => ({
  type: AffiliateActionTypes.AddCampaignsFail,
  payload,
});

export const updateCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.UpdateCampaigns,
  payload,
});

export const updateCampaignSuccess = (payload:any) => ({
  type: AffiliateActionTypes.UpdateCampaignsSuccess,
  payload,
});

export const updateCampaignFail = (payload:any) => ({
  type: AffiliateActionTypes.UpdateCampaignsFail,
  payload,
});

export const deleteCampaign = (payload:any) => ({
  type: AffiliateActionTypes.DeleteCampaigns,
  payload,
});

export const deleteCampaignSuccess = (payload:any) => ({
  type: AffiliateActionTypes.DeleteCampaignsSuccess,
  payload,
});

export const deleteCampaignsFail = (payload:any) => ({
  type: AffiliateActionTypes.DeleteCampaignsFail,
  payload,
});

export const getTHXCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.GetTHXCampaigns,
  payload,
});

export const getTHXCampaignsSuccess = (payload:any) => ({
  type: AffiliateActionTypes.GetTHXCampaignsSuccess,
  payload,
});

export const getTHXCampaignsFail = (payload:any) => ({
  type: AffiliateActionTypes.GetTHXCampaignsFail,
  payload,
});

export const addTHXCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.AddTHXCampaigns,
  payload,
});

export const addTHXCampaignsSuccess = (payload:any) => ({
  type: AffiliateActionTypes.AddTHXCampaignsSuccess,
  payload,
});

export const addTHXCampaignsFail = (payload:any) => ({
  type: AffiliateActionTypes.AddTHXCampaignsFail,
  payload,
});

export const updateTHXCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.UpdateTHXCampaigns,
  payload,
});

export const updateTHXCampaignsSuccess = (payload:any) => ({
  type: AffiliateActionTypes.UpdateTHXCampaignsSuccess,
  payload,
});

export const updateTHXCampaignsFail = (payload:any) => ({
  type: AffiliateActionTypes.UpdateTHXCampaignsFail,
  payload,
});

export const deleteTHXCampaigns = (payload:any) => ({
  type: AffiliateActionTypes.DeleteTHXCampaigns,
  payload,
});

export const deleteTHXCampaignsSuccess = (payload:any) => ({
  type: AffiliateActionTypes.DeleteTHXCampaignsSuccess,
  payload,
});

export const deleteTHXCampaignFail = (payload:any) => ({
  type: AffiliateActionTypes.DeleteTHXCampaignsFail,
  payload,
});
