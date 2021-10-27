import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DefaultSelect } from './index';

storiesOf('Basic', module).add('DefaultSelect', () => {
  const onChange = action('onChange');
  
  return (
    <div style={{ height: 32, width: 150 }}>
      <DefaultSelect
        options={[
          { value: 'Select 1' },
          { value: 'Select 2' },
        ]}
        onChange={onChange}
      />
    </div>
  );
});
