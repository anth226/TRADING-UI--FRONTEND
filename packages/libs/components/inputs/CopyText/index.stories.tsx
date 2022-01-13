import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { CopyText } from './index';

storiesOf('Basic', module).add('CopyText', () => {
  const value = text('value', '0xdee88b38ab2552f300495vf0d0d0d0f1894jd900');
  const disabled = boolean('disabled', false);
  const onCopy = action('onCopy');

  return (
    <div style={{ width: 450 }}>
      <CopyText
        value={value}
        disabled={disabled}
        onCopy={onCopy}
      />
    </div>
  );
});
