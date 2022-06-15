/* eslint-disable */
import React, { FC, useState } from 'react';
import { 
  Account, StatisticsProfile, PerformanceProfile, HistoryProfile,
} from 'containers';
import useResize from '@option-blitz/libs/hooks/useResize';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './styles.module.scss';

const Profile = () => {
  const { isMobile } = useResize();
  const [activeItem, setActiveItem] = useState(1)

  const navigation = [
    {
      name: 'STATISTICS',
    },
    {
      name: 'PERFORMANCE',
    },
    {
      name: 'HISTORY',
    },
  ];

  const whichTab = () => {
    switch (activeItem) {
      case 1:
        return <StatisticsProfile isMobile={isMobile} />
      case 2:
        return <PerformanceProfile isMobile={isMobile} />
      default:
        return <HistoryProfile isMobile={isMobile} />
    }
  }
  return (
    <MainLayout type={'profile'}>
      {!isMobile &&
        <div className={styles.container}>
          <div className={styles.row}>
            <Account isMobile={isMobile}/>
            <StatisticsProfile />
            <PerformanceProfile />
          </div>
          <div className={styles.row}>
            <HistoryProfile />
          </div>
        </div>
      }

      {isMobile &&
        <div>
          <Account isMobile={isMobile} />
          <div className={styles.navigation}>
            {navigation.map((link, i) => (
              <div className={activeItem === i + 1 ? styles.navItemActive : styles.navItem}
                   onClick={() => setActiveItem(i + 1)}>
                <div>{link.name}</div>
              </div>
            ))}
          </div>
          <div>{whichTab()}</div>
      </div>
      }
    </MainLayout>
  );
};

export { Profile };
