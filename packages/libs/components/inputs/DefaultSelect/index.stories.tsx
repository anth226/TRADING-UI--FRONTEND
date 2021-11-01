import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { DefaultSelect } from './index';

storiesOf('Basic', module).add('DefaultSelect', () => {
  const onChange = action('onChange');
  const title = text('Title', 'Title');
  
  return (
    <div style={{ width: 150 }}>
      <DefaultSelect
        title={title}
        options={[
          { value: 'Select 1' },
          { value: 'Select 2' },
        ]}
        onChange={onChange}
      />
    </div>
  );
});
