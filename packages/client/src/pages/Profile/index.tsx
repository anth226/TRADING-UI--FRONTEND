import React, { FC } from 'react';
import { 
  Account, StatisticsProfile, PerformanceProfile, HistoryProfile,
} from 'containers';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './styles.module.scss';

const Profile: FC = () => (
  <MainLayout>
    <div className={styles.container}>
      <div className={styles.row}> 
        <Account />
        <StatisticsProfile />
        <PerformanceProfile />
      </div>
      <div className={styles.row}> 
        <HistoryProfile />
      </div>
    </div>
  </MainLayout>
);

export { Profile };
