import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/dist';
import { headerOptionsMock } from '@option-blitz/libs/mock/header/HeaderSelectItem';
import { Header } from './index';
import { tabsMock } from '../../mock/header/tabs';

storiesOf('Layout', module).add('Header', () => {
  const onAddTab = action('onAddTab');
  const onTabClick = action('onTabClick');
  const onBalanceChange = action('onBalanceChange');
  
  const address = text('Address', '0x00...0000');
  
  const avatarIsActive = boolean('AvatarIsActive', false);
  const isAuth = boolean('IsAuth', false);
  const isMobile = boolean('IsMobile', false);
  return (
    <div style={{ width: '100%' }}>
      <Header
        isMobile={isMobile}
        address={address}
        isAuth={isAuth}
        defaultOption={headerOptionsMock[0]}
        options={headerOptionsMock}
        userAvatarIsActive={avatarIsActive}
        tabs={tabsMock}
        onBalanceChange={onBalanceChange}
        onAddTab={onAddTab} 
        onTabClick={onTabClick} 
      />
    </div>
  );
});
