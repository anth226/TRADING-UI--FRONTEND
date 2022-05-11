import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { Signals } from './index';

storiesOf('LeftSidebar', module).add('Signals', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <Signals isMobile={isMobile} />
    </div>
  );
});
