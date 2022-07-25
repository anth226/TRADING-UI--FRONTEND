import createReducer from '@option-blitz/libs/utils/createReducer';
import { NotificationsState } from '../../types/store/notifications';
import { notificationsHandlers } from './handlers';

export const notificationsInitialState:Readonly<NotificationsState> = {
  notifications: [],
};

export default createReducer(notificationsInitialState, notificationsHandlers);
