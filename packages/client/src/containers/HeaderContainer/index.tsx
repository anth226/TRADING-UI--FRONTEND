import React, { FC } from 'react';
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
  
  return (
    <Header
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
