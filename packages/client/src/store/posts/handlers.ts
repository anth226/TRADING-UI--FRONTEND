import { PostActionTypes } from './actionTypes';

const getAllInfo = (state: any, { payload }: any) => ({
  ...state,
  info: [...payload],

});

export const postHandlers = {
  [PostActionTypes.GetAllInfoSuccess]: getAllInfo,
};
