import { ProductType } from '@option-blitz/libs/constants/product';
import { HeaderTabItem } from '../../layouts/Header';

export interface TabsState {
  items: HeaderTabItem[]
  activeProductType?: ProductType
}
