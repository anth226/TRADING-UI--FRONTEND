import { NewsActionTypes } from './actionTypes';

const getAllNews = (state: any) => ({
  ...state,
  loading: true,
});

const getAllNewsSuccess = (state: any, { payload }: any) => ({
  ...state,
  news: { ...payload },
  loading: false,
});

const getAllNewsFail = (state: any, { payload }: any) => ({
  ...state,
  news: { ...payload },
  loading: false,
  error: payload,
});

export const newsHandlers = {
  [NewsActionTypes.GetAllNews]: getAllNews,
  [NewsActionTypes.GetAllNewsSuccess]: getAllNewsSuccess,
  [NewsActionTypes.GetAllNewsFail]: getAllNewsFail,
};
