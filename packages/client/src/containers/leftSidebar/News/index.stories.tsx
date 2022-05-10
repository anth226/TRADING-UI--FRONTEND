import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { News } from './index';

storiesOf('LeftSidebar', module).add('News', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <News isMobile={isMobile} />
    </div>
  );
});
