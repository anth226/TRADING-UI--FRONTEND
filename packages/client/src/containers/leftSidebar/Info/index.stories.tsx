import React from 'react';
import { storiesOf } from '@storybook/react';
import { Info } from './index';

storiesOf('LeftSidebar', module).add('Info', () => (
  <div style={{ height: '100vh' }}>
    <Info isMobile />
  </div>
));
