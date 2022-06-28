// export const getAllNews = () => get();

import { NewsActionTypes } from './actionTypes';

export const getNews = (payload: any) => ({
  type: NewsActionTypes.GetAllData,
  payload,
});

export const getNewsSuccess = (payload:any) => ({
  type: NewsActionTypes.GetAllDataSuccess,
  payload,
});

export const getNewsFail = (payload: any) => ({
  type: NewsActionTypes.GetAllDataFail,
  payload,
});
