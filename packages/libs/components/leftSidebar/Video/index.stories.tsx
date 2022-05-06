import React from 'react';
import { storiesOf } from '@storybook/react';
import { VideoCard } from './index';
import { Crypto, cryptoIcons, cryptoNames } from '../../../constants/crypto';

storiesOf('LeftSidebar', module).add('VideoCard', () => (
  <div style={{ width: 200 }}>
    <VideoCard
      icon={cryptoIcons[Crypto.BTC]}
      title={cryptoNames[Crypto.BTC]}
    />
  </div>
));
