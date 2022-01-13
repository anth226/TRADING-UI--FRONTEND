import createReducer from '@option-blitz/libs/utils/createReducer';
import { ProductType } from '@option-blitz/libs/constants/product';
import { TabsState } from '../../types/store/tabs';
import { tabsHandlers } from './handlers';
import { tabsMock } from '../../mock/header/tabs';

export const tabsInitialState: Readonly<TabsState> = {
  items: tabsMock,
  activeProductType: ProductType.Classic,
};

export default createReducer(tabsInitialState, tabsHandlers);
