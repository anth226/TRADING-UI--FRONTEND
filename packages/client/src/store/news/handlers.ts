import { NewsActionTypes } from './actionTypes';

const getAllNews = (state: any, { payload }: any) => ({
  ...state,
  news: { ...payload },
});

export const newsHandlers = {
  [NewsActionTypes.GetAllNewsSuccess]: getAllNews,
};
