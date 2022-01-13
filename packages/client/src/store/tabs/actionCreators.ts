import { TabsState } from '../../types/store/tabs';
import { TabsActionTypes } from './actionTypes';

export const tabsSetState = (payload: Partial<TabsState>) => ({
  type: TabsActionTypes.SetState,
  payload,
});

export const tabsSetActiveTab = (id: number) => ({
  type: TabsActionTypes.SetActiveTab,
  payload: { id },
});
