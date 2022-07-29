// @ts-ignore
import { get } from 'http';
import { NewsActionTypes } from './actionTypes';
import { ApiPaths } from '../../utils/api/constants';

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
