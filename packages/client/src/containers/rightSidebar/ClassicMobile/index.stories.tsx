import React from 'react';
import { storiesOf } from '@storybook/react';
import { ClassicMobile } from './index';

storiesOf('MobileVersion', module).add('ClassicMobile', () => (
  <div style={{ width: 375 }}>
    <ClassicMobile />
  </div>
));
