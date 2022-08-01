// @ts-ignore
import { NewsActionTypes } from './actionTypes';
import { ApiPaths } from '../../utils/api/constants';
import { get } from '../../http';

// eslint-disable-next-line max-len
// export const getAllNews = ({ is, item }) => get(`${ApiPaths.GetNews}/${is}`, { params: { item } }); example
export const getAllNews = () => get(ApiPaths.GetNews);

export const getNews = (payload: any) => ({
  type: NewsActionTypes.GetAllNews,
  payload,
});

export const getNewsSuccess = (payload:any) => ({
  type: NewsActionTypes.GetAllNewsSuccess,
  payload,
});

export const getNewsFail = (payload: any) => ({
  type: NewsActionTypes.GetAllNewsFail,
  payload,
});
