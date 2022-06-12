/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import { HistoryOpenPosition } from '../../components/profile';

interface Props  {
  isMobile?: boolean;
};

const HistoryProfile: FC<Props> = ({isMobile}) => (

  <div className={ isMobile ? styles.wrapMobile : styles.wrap}>
    <p className={ isMobile ? styles.none : styles.title}>History</p>

    <div className={styles.containerButtons}>
      <HistoryOpenPosition />
    </div>

  </div>
);

export { HistoryProfile };
