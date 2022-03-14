import React, { FC } from 'react';
import { Change } from './components/Change';
import { Overall } from './components/Overall';
import chartImg from './chart.svg';
import styles from './styles.module.scss';

type Props = {
};

const PerformanceProfile: FC<Props> = () => (
  <div className={styles.wrap}>
    <p className={styles.title}>Performance</p>
    <img src={chartImg} alt="chart" className={styles.imgChart} />
    <div className={styles.row}>
      <Change />
      <Overall />
    </div>
  </div>
);

export { PerformanceProfile };
