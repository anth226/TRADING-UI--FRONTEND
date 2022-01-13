import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/dist';
import { RightSidebarReturns } from './index';

storiesOf('RightSidebar', module).add('Returns', () => {
  const percents = text('Percents', '75');
  const balance = text('Balance', '0.00');
  
  return (
    <div style={{ width: 155 }}>
      <RightSidebarReturns percents={percents} balance={balance} />
    </div>
  );
});
