import { AlertsActionTypes } from './actionTipes';

const getlistAlertsSuccess = (state:any, { payload } :any) => ({
  ...state,
  alerts: [...payload],
});

export const alertsHandlers = {
  [AlertsActionTypes.GetListAlertsSuccess]: getlistAlertsSuccess,
};
