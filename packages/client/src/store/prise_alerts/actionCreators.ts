import { AlertsActionTypes } from './actionTipes';

export const getListAlerts = (payload:any) => ({
  type: AlertsActionTypes.GetListAlerts,
  payload,
});

export const getListAlertsSuccess = (payload:any) => ({
  type: AlertsActionTypes.GetListAlertsSuccess,
  payload,
});

export const getListAlertsFail = (payload:any) => ({
  types: AlertsActionTypes.GetListAlertsFail,
  payload,
});

export const deleteAllAlerts = (payload:any) => ({
  types: AlertsActionTypes.DeleteAllAlerts,
  payload,
});

export const deleteAllAlertsSuccess = (payload:any) => ({
  types: AlertsActionTypes.DeleteAllAlertsSuccess,
  payload,
});

export const deleteAllAlertsFail = (payload:any) => ({
  types: AlertsActionTypes.DeleteAllAlertsFail,
  payload,
});

export const deleteSingleItemAlert = (payload:any) => ({
  types: AlertsActionTypes.DeleteSingleItemAlert,
  payload,
});

export const deleteSingleItemAlertSuccess = (payload:any) => ({
  types: AlertsActionTypes.DeleteSingleItemAlertSuccess,
  payload,
});

export const deleteSingleItemAlertFail = (payload:any) => ({
  types: AlertsActionTypes.DeleteSingleItemAlertFail,
  payload,
});

export const createAlert = (payload:any) => ({
  types: AlertsActionTypes.CreateAlert,
  payload,
});

export const CreateAlertSuccess = (payload:any) => ({
  types: AlertsActionTypes.CreateAlertSuccess,
  payload,
});

export const CreateAlertFail = (payload:any) => ({
  types: AlertsActionTypes.CreateAlertFail,
  payload,
});
