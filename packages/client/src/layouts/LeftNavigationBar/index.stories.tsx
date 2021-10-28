import React from 'react';
import { storiesOf } from '@storybook/react';
import { LeftNavigationBar } from './index';

storiesOf('Layout', module).add('LeftNavigationBar', () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <LeftNavigationBar />
  </div>
));
