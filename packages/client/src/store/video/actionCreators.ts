/* eslint-disable */
import {VideoActionTypes} from "./actionTypes";

// export const getAllVideo = () => get();

export const getVideo = (payload:any) => ({
    type:VideoActionTypes.GetAllVideo,
    payload,
});

export const getVideoSuccess = (payload:any) => ({
    type:VideoActionTypes.GetAllVideoSuccess,
    payload,
})

export const getVideoFail = (payload:any) => ({
    type:VideoActionTypes.GetAllVideoFail,
    payload,
})