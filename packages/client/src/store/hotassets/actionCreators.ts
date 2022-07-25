/* eslint-disable */
import {HotAssetsActionTypes} from "./actionTypes";

// export const getAllAssets = () => get ();

export const getAllAssets = (payload:any) => ({
    type: HotAssetsActionTypes.GetAllAssets,
    payload,
})

export const getAssetsSuccess = (payload:any) => ({
    type: HotAssetsActionTypes.GetAllAssetsSuccess,
    payload,
})

export const getAssetsFail = (payload:any) => ({
    type: HotAssetsActionTypes.GetAllAssetsFail,
    payload,
})