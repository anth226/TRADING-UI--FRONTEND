import { NavigationState } from '../../types/store/navigation';
import { NavigationActionTypes } from './actionTypes';
import { Navigation } from '../../constants/navigation/navigation';

export const navigationSetState = (payload: NavigationState) => ({
  type: NavigationActionTypes.SetState,
  payload,
});

export const navigationSetItem = (payload?: Navigation) => ({
  type: NavigationActionTypes.SetItem,
  payload,
});

export const navigationToggleMobileSidebar = () => ({
  type: NavigationActionTypes.ToggleMobileSidebar,
});
