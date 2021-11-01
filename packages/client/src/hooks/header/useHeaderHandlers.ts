import { useCallback } from 'react';
import { headerOptionsMock } from '@option-blitz/libs/mock/header/HeaderSelectItem';
import { useDispatch } from 'react-redux';
import { ProductType } from '@option-blitz/libs/constants/product';
import { Countries } from '@option-blitz/libs/constants/countries';
import { useShallowSelector } from '../useShallowSelector';
import { selectTabs } from '../../store/tabs/selectors';
import { tabsSetActiveTab } from '../../store/tabs/actionCreators';

export interface HeaderTabItem {
  id: number
  productType: ProductType
  countries: Countries
  value: string
  interest: string
  isActive?: boolean
}

export const useHeaderHandlers = () => {
  const {
    items: tabs,
  } = useShallowSelector(selectTabs);
  
  const dispatch = useDispatch();
  
  const onBalanceChange = useCallback(() => {
    
  }, []);
  
  const onAddTab = useCallback(() => {
    
  }, []);
  
  const onTabClick = useCallback((id: number) => {
    dispatch(tabsSetActiveTab(id));
  }, [dispatch]);
  
  return {
    tabs,
    onAddTab,
    onBalanceChange,
    options: headerOptionsMock,
    defaultOption: headerOptionsMock[0],
    isAuth: true,
    userAvatarIsActive: false,
    address: '0x00...0000',
    onTabClick,
  };
};
