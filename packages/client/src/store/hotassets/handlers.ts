import { HotAssetsActionTypes } from './actionTypes';

const getAllAssets = (state:any, { payload } : any) => ({
  ...state,
  assets: [...payload],
});

export const assetsHandlers = {
  [HotAssetsActionTypes.GetAllAssetsSuccess]: getAllAssets,
};
