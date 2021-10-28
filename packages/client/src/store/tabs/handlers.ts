import { HandlerFn } from '../../types/handler';
import { TabsState } from '../../types/store/tabs';
import { tabsSetState, tabsSetActiveTab } from './actionCreators';
import { TabsActionTypes } from './actionTypes';

const setState: HandlerFn<typeof tabsSetState, TabsState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const setActiveTab: HandlerFn<typeof tabsSetActiveTab, TabsState> = (
  state,
  { payload: { id } },
) => {
  const tabs = state.items.map((item) => ({ ...item, isActive: false }));
  const currentTab = tabs.find((tab) => tab.id === id);
  
  if (currentTab) {
    currentTab.isActive = true;
  }
  
  return {
    ...state,
    items: tabs,
  };
};

export const tabsHandlers = {
  [TabsActionTypes.SetState]: setState,
  [TabsActionTypes.SetActiveTab]: setActiveTab,
};
