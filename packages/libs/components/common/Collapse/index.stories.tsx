import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/dist';
import { Collapse } from './index';

storiesOf('Common', module).add('Collapse', () => {
  const title = text('Title', 'Title');
  const isActive = boolean('IsActive', true);
  
  return (
    <div style={{ width: 155 }}>
      <Collapse isActive={isActive} title={title}>
        Data
      </Collapse>
    </div>
  );
});
