import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
};

const Change: FC<Props> = () => (
  <div className={styles.container}>
    <span className={styles.title}>Change</span>
    <span className={styles.value}>6.38%</span>
    <div className={styles.rowTrade}>
      <span className={styles.lastTrade}>Last trade:</span>
      <span>+$100</span>
    </div>
  </div>
);

export { Change };
