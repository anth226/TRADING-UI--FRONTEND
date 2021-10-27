import React from 'react';
import { storiesOf } from '@storybook/react';
import { HotAssets } from './index';

storiesOf('LeftSidebar', module).add('HotAssets', () => (
  <div style={{ height: '100vh' }}>
    <HotAssets />
  </div>
));
