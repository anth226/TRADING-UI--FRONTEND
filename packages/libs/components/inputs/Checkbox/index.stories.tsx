import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './index';

storiesOf('Basic', module).add('Checkbox', () => {
  const checked = boolean('Checked', true);
  const onCheck = action('onCheck');
  const label = text('Label', 'Sample checkbox');
  const size = number('Size', 24);
  
  return (
    <Checkbox checked={checked} onCheck={onCheck} size={size}>{label}</Checkbox>
  );
});
