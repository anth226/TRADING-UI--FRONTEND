import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { HotAssets } from './index';

storiesOf('LeftSidebar', module).add('HotAssets', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <HotAssets isMobile={isMobile} />
    </div>
  );
});
