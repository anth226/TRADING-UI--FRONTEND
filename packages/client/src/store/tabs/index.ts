import createReducer from '@option-blitz/libs/utils/createReducer';
import { TabsState } from '../../types/store/tabs';
import { tabsHandlers } from './handlers';
import { tabsMock } from '../../mock/header/tabs';

export const tabsInitialState: Readonly<TabsState> = {
  items: tabsMock,
};

export default createReducer(tabsInitialState, tabsHandlers);
