import { VideoActionTypes } from './actionTypes';

const getAllVideo = (state: any, { payload }:any) => ({
  ...state,
  video: [...payload],
});

export const videoHandlers = {
  [VideoActionTypes.GetAllVideoSuccess]: getAllVideo,
};
