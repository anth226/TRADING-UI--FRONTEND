import { NotificationsActionTypes } from './actionTypes';

const getNotifications = (state:any, { payload }:any) => ({
  ...state,
  notification: [payload],
});

export const notificationsHandlers = {
  [NotificationsActionTypes.GetListDataSuccess]: getNotifications,
};
