import { get } from 'http';
import { ApiPaths } from '../../utils/api/constants';
import { PostActionTypes } from './actionTypes';

export const getAllInfo = () => get(ApiPaths.GetPostsUrl);

export const getInfo = (payload: any) => ({
  type: PostActionTypes.GetAllInfo,
  payload,
});

export const getInfoSuccess = (payload: any) => ({
  type: PostActionTypes.GetAllInfoSuccess,
  payload,
});

export const getInfoFail = (payload: any) => ({
  type: PostActionTypes.GetAllInfoFail,
  payload,
});
