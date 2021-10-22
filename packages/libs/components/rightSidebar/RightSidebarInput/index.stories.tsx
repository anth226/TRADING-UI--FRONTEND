import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/dist';
import { action } from '@storybook/addon-actions';
import { RightSidebarInput } from './index';
import { FontIconName } from '../../inputs/FontIcon';

storiesOf('RightSidebar', module).add('Input', () => {
  const value = text('Value', '0.0');
  const label = text('Label', 'Trade amount');
  const symbol = text('Symbol', '$');
  
  const onFirstBtnClick = action('onFirstBtnClick');
  const onSecondBtnClick = action('onSecondBtnClick');
  const onChange = action('onChange');

  return (
    <div style={{ width: 155 }}>
      <RightSidebarInput
        value={value}
        label={label}
        symbol={symbol}
        onChange={onChange}
        onFirstBtnClick={onFirstBtnClick}
        onSecondBtnClick={onSecondBtnClick}
        firstBtnIcon={FontIconName.Minus}
        secondBtnIcon={FontIconName.Plus}
      />
    </div>
  );
});
