import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { OpenPosition } from './index';

storiesOf('LeftSidebar', module).add('OpenPosition', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <OpenPosition isMobile={isMobile} />
    </div>
  );
});
