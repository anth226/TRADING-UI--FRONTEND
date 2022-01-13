import React from 'react';
import { storiesOf } from '@storybook/react';
import { BinaryMobile } from './index';

storiesOf('MobileVersion', module).add('BinaryMobile', () => (
  <div style={{ width: 375 }}>
    <BinaryMobile />
  </div>
));
