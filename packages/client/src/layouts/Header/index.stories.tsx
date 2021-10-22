import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './index';

storiesOf('Layout', module).add('Header', () => (
  <div style={{ width: '100%' }}>
    <Header />
  </div>
));
