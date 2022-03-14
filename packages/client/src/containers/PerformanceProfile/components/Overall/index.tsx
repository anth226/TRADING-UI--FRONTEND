import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
};

const Overall: FC<Props> = () => (
  <div className={styles.container}>
    <div className={styles.colLeft}>
      <span className={styles.title}>overall</span>
      <div className={styles.containerValues}>
        <div className={styles.item}>
          <span className={styles.value}>73</span>
          <span className={styles.label}>winners</span>
        </div>
        <div className={styles.item}>
          <span className={styles.value}>82</span>
          <span className={styles.label}>Lossers</span>
        </div>
      </div>
    </div> 
    <div className={styles.colRight}>
      <div className={styles.item}>
        <span className={styles.value}>53%</span>
        <span className={styles.label}>Winrate</span>
      </div> 
    </div> 
  </div>
);

export { Overall };
