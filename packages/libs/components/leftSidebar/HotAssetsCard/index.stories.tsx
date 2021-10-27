import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { HotAssetsCard } from './index';
import { Coin } from '../../../constants/coin';

storiesOf('LeftSidebar', module).add('HotAssetsCard', () => {
  const firstValue = text('FirstValue', '$100');
  const secondValue = text('SecondValue', '+9.06');

  return (
    <div style={{ width: 200 }}>
      <HotAssetsCard coin={Coin.BTC} firstValue={firstValue} secondValue={secondValue} />
    </div>
  );
});
