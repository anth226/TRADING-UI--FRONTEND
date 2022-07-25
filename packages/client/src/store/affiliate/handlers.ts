import { AffiliateActionTypes } from './actionTypes';

const getAllAffiliate = (state: any, { payload }:any) => ({
  ...state,
  affiliate: [...payload],
});

export const affiliateHandlers = {
  [AffiliateActionTypes.GetAllDataSuccess]: getAllAffiliate,
};
