import { ProductType } from '@option-blitz/libs/constants/product';
import { HeaderTabItem } from 'hooks/header/useHeaderHandlers';

export interface TabsState {
  items: HeaderTabItem[]
  activeProductType?: ProductType
}
