import React, { FC } from 'react';
import useResize from '@option-blitz/libs/hooks/useResize';
import { Coin } from '@option-blitz/libs/constants/coin';
import { ethers } from 'ethers';
import { Header } from '../../layouts/Header';
import { useHeaderHandlers } from '../../hooks/header/useHeaderHandlers';
import { useOptionBlitz } from '../../hooks/OptionBlitzProvider';
import { useOptionBlitzSelector } from '../../hooks/useOptionBlitzSelector';

// destructuring the optionBlitz store
const selector = (state: any) => {
  const { usdcAllowance, usdcBalance, ethBalance } = state || {};
  return {
    usdcAllowance,
    usdcBalance,
    ethBalance,
  };
};

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
    openMobileNavigation,
  } = useHeaderHandlers();
  const optionBlitz = useOptionBlitz();
  const { usdcAllowance, usdcBalance, ethBalance } = useOptionBlitzSelector(selector);
  // console.log(`header balance rendering ${optionBlitz.optionBlitz?.store.state} ${usdcAllowance} ${usdcBalance} ${ethBalance}`);
  const balances = options.map((c) => 
    // console.log(c.coin, Coin.USDT, usdcBalance?.toString());
    ({
      ...c, 
      value: c.coin == Coin.USDT && usdcBalance != undefined ? +ethers.utils.formatUnits(usdcBalance, 6) : c.value, 
      coinValue: c.coin == Coin.USDT && usdcBalance != undefined ? ethers.utils.formatUnits(usdcBalance, 6) : c.coinValue, 
    }));
  
  const { isMobile } = useResize();
  
  return (
    <Header
      openMobileNavigation={openMobileNavigation}
      isMobile={isMobile}
      onAddTab={onAddTab} 
      onBalanceChange={onBalanceChange} 
      options={balances} 
      defaultOption={balances[0]} 
      isAuth={isAuth} 
      tabs={tabs} 
      userAvatarIsActive={userAvatarIsActive} 
      address={address}
      onTabClick={onTabClick}
    />
  );
};

export { HeaderContainer };
