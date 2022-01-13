import React from 'react';
import { storiesOf } from '@storybook/react';
import { MainChart } from './index';

storiesOf('Charts', module).add('MainChart', () => (
  <div>
    <MainChart />
  </div>
));
