import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { Chat } from './index';

storiesOf('LeftSidebar', module).add('Chat', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ height: '100vh' }}>
      <Chat isMobile={isMobile} />
    </div>
  );
});
