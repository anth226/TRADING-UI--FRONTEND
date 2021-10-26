import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProfitChart } from './index';
import { profitItemsMock } from '../../../mock/rightSidebar/classicSidebar';

storiesOf('Charts', module).add('ProfitChart', () => (
  <div style={{width: 235}}>
    <ProfitChart profitItems={profitItemsMock} />
  </div>
));
