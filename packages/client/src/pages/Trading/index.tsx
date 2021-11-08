import React, { FC } from 'react';
import { AutoSizer } from 'react-virtualized';
import { MainLayout } from '../../layouts/MainLayout';
import { MainChart } from '../../components/charts/MainChart';
import styles from './styles.module.scss';

const Trading: FC = () => (
  <MainLayout>
    <div className={styles.chart_wrap}>
      <AutoSizer>
        {({ width, height }) => (
          <MainChart width={width} height={height} />
        )}
      </AutoSizer>
    </div>
  </MainLayout>
);

export { Trading };
