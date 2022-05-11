import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { Notifications } from './index';

storiesOf('LeftSidebar', module).add('VideoTutorials', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <Notifications isMobile={isMobile} />
    </div>
  );
});
