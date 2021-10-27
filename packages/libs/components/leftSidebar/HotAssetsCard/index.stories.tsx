import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { HotAssetsCard } from './index';
import { Crypto, cryptoIcons, cryptoNames } from '../../../constants/crypto';

storiesOf('LeftSidebar', module).add('HotAssetsCard', () => {
  const firstValue = text('FirstValue', '$100');
  const secondValue = text('SecondValue', '+9.06');

  return (
    <div style={{ width: 200 }}>
      <HotAssetsCard 
        icon={cryptoIcons[Crypto.BTC]}
        title={cryptoNames[Crypto.BTC]}
        firstValue={firstValue}
        secondValue={secondValue}
      />
    </div>
  );
});
