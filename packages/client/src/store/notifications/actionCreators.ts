import { NotificationsActionTypes } from './actionTypes';

export const getListData = (payload:any) => ({
  type: NotificationsActionTypes.GetListData,
  payload,
});

export const getListDataSuccess = (payload:any) => ({
  types: NotificationsActionTypes.GetListDataSuccess,
  payload,
});

export const getListDataFail = (payload:any) => ({
  types: NotificationsActionTypes.GetListDataFail,
  payload,
});
