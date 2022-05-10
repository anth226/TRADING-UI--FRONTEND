import React from 'react';
import { storiesOf } from '@storybook/react';
import { NewsCard } from './index';
import { Crypto, cryptoIcons, cryptoNames } from '../../../constants/crypto';

storiesOf('LeftSidebar', module).add('News', () => (
  <div style={{ width: 200 }}>
    <NewsCard
      icon={cryptoIcons[Crypto.BTC]}
      title={cryptoNames[Crypto.BTC]}
    />
  </div>
));
