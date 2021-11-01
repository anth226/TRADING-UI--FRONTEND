import { HandlerFn } from '../../types/handler';
import { NavigationState } from '../../types/store/navigation';
import { navigationSetItem, navigationToggleMobileSidebar, navigationSetState } from './actionCreators';
import { NavigationActionTypes } from './actionTypes';

const setState: HandlerFn<typeof navigationSetState, NavigationState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const setItem: HandlerFn<typeof navigationSetItem, NavigationState> = (
  state,
  { payload },
) => ({
  ...state,
  activeNavigation: payload,
});

const toggleMobileSidebar: HandlerFn<typeof navigationToggleMobileSidebar, NavigationState> = (
  state,
) => ({
  ...state,
  mobileSideBarIsOpen: !state.mobileSideBarIsOpen,
});

export const navigationHandlers = {
  [NavigationActionTypes.SetState]: setState,
  [NavigationActionTypes.ToggleMobileSidebar]: toggleMobileSidebar,
  [NavigationActionTypes.SetItem]: setItem,
};
