/* eslint-disable */
import React, { FC } from 'react';
import { Change } from './components/Change';
import { Overall } from './components/Overall';
import chartImg from './chart.svg';
import styles from './styles.module.scss';

interface Props  {
  isMobile?: boolean;
};

const PerformanceProfile: FC<Props> = ({isMobile}) => (
  <div className={ isMobile ? styles.wrapMobile : styles.wrap}>
    <p className={styles.title}>Performance</p>
    <img src={chartImg} alt="chart" className={styles.imgChart} />
    <div className={ isMobile ? styles.rowMobile : styles.row}>
      <Change />
      <Overall />
    </div>
  </div>
);

export { PerformanceProfile };
