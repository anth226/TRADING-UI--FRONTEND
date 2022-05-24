import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { Staking } from './index';

storiesOf('LeftSidebar', module).add('Staking', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <Staking isMobile={isMobile} />
    </div>
  );
});
