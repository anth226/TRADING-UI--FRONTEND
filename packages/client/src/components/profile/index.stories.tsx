/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/dist';
import { HistoryOpenPosition } from './index';

storiesOf('LeftSidebar', module).add('OpenPosition', () => {
  const isMobile = boolean('isMobile', false);
  return (
    <div style={{ width: '100wh' }}>
      <HistoryOpenPosition isMobile={isMobile} />
    </div>
  );
});
