import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RightSidebarTime } from '.';

storiesOf('RightSidebar', module).add('Select', () => {
  const onChange = action('onChange');
  
  return (
    <div style={{ width: 155 }}>
      <RightSidebarTime onChange={onChange} />
    </div>
  );
});
