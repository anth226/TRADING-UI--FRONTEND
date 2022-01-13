import React from 'react';
import { storiesOf } from '@storybook/react';
import { tabsMock } from '@option-blitz/client/src/mock/header/tabs';
import { action } from '@storybook/addon-actions';
import { HeaderTabSelect } from './index';

storiesOf('Basic', module).add('HeaderTabSelect', () => {
  const onChange = action('onChane');
  return (
    <div style={{ height: 34 }}>
      <HeaderTabSelect tabs={tabsMock} defaultValue={tabsMock[0]} onChange={onChange} />
    </div>
  );
});
