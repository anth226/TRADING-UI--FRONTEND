import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
};

const Overall: FC<Props> = () => (
  <div className={styles.container}>
    <div className={styles.colLeft}>
      <span className={styles.title}>overall</span>
      <div className={styles.containerValues}>
        <div className={styles.item}>
          <span className={cx(styles.value, styles.winners)}>73</span>
          <span className={styles.label}>winners</span>
        </div>
        <div className={styles.item}>
          <span className={cx(styles.value, styles.lossers)}>82</span>
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
