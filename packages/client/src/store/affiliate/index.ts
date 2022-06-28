import createReducer from '@option-blitz/libs/utils/createReducer';
import { AffiliateState } from '../../types/store/affiliate';
import { affiliateHandlers } from './handlers';

export const affiliateInitialState:Readonly<AffiliateState> = {
  affiliate: [],
};

export default createReducer(affiliateInitialState, affiliateHandlers);
