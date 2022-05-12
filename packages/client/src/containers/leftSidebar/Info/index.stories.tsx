import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { Info } from './index';

storiesOf('LeftSidebar', module).add('Info', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <Info isMobile={isMobile} />
    </div>
  );
});
