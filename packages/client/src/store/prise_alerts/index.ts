import createReducer from '@option-blitz/libs/utils/createReducer';
import { AlertsState } from '../../types/store/alerts';
import { alertsHandlers } from './handlers';

export const alertsInitialState: Readonly<AlertsState> = {
  alerts: [],
};

export default createReducer(alertsInitialState, alertsHandlers);
