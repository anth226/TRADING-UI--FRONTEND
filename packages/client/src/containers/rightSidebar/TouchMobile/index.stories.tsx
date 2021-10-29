import React from 'react';
import { storiesOf } from '@storybook/react';
import { TouchMobile } from './index';

storiesOf('MobileVersion', module).add('TouchMobile', () => (
  <div style={{ width: 375 }}>
    <TouchMobile />
  </div>
));
