import React, { FC } from 'react';
import useResize from '@option-blitz/libs/hooks/useResize';
import { Header } from '../../layouts/Header';
import { useHeaderHandlers } from '../../hooks/header/useHeaderHandlers';

const HeaderContainer: FC = () => {
  const {
    options,
    onTabClick,
    onBalanceChange,
    onAddTab,
    defaultOption,
    address,
    userAvatarIsActive,
    isAuth,
    tabs,
  } = useHeaderHandlers();
  
  const { isMobile } = useResize();
  
  return (
    <Header
      isMobile={isMobile}
      onAddTab={onAddTab} 
      onBalanceChange={onBalanceChange} 
      options={options} 
      defaultOption={defaultOption} 
      isAuth={isAuth} 
      tabs={tabs} 
      userAvatarIsActive={userAvatarIsActive} 
      address={address}
      onTabClick={onTabClick}
    />
  );
};

export { HeaderContainer };
