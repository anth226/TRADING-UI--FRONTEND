import React, { FC } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './styles.module.scss';
import { MainChartContainer } from '../../containers/charts/MainChartContainer';

const Trading: FC = () => (
  <MainLayout>
    <div className={styles.chart_wrap}>
      <MainChartContainer />
    </div>
  </MainLayout>
);

export { Trading };
