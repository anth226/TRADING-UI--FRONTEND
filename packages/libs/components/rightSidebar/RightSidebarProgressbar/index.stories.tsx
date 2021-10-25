import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/dist';
import { RightSidebarProgressbar } from '.';

storiesOf('RightSidebar', module).add('Progressbar', () => {
  const value = number('Value', 37);

  return (
    <div style={{ width: 155 }}>
      <RightSidebarProgressbar value={value} />
    </div>
  );
});
