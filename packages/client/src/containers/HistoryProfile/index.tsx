import React, { FC } from 'react';
import styles from './styles.module.scss';
import { HistoryOpenPosition } from '../../components/profile';

type Props = {
};

const HistoryProfile: FC<Props> = () => (

  <div className={styles.wrap}>
    <p className={styles.title}>History</p>

    <div className={styles.containerButtons}>
      <HistoryOpenPosition />
    </div>

  </div>
);

export { HistoryProfile };
