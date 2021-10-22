import { useCallback } from 'react';
import { headerOptionsMock } from '@option-blitz/libs/mock/header/HeaderSelectItem';
import { tabsMock } from '../../mock/header/tabs';

export const useHeaderHandlers = () => {
  const onBalanceChange = useCallback(() => {
    
  }, []);
  
  const onAddTab = useCallback(() => {
    
  }, []);
  
  return {
    tabs: tabsMock,
    onAddTab,
    onBalanceChange,
    options: headerOptionsMock,
    defaultOption: headerOptionsMock[0],
    isAuth: true,
    userAvatarIsActive: false,
    balance: '0x00...0000',
  };
};
