import { State } from '../../types/store';
import { TabsState } from '../../types/store/tabs';

export const selectTabs = (state: State) => state.tabs;
export const selectTabsProp = <T extends keyof TabsState>(propKey: T) =>
  (state: State) => state.tabs[propKey];
