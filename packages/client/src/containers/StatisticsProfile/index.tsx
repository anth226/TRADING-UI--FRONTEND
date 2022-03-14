import React, { FC } from 'react';
import { Tabs } from '@option-blitz/libs/components/inputs/Tabs';
import styles from './styles.module.scss';

type Props = {
};

const StatisticsProfile: FC<Props> = () => {
  const active = 0;
  const controlled = false;
  const onChange = () => {};
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Statistics</p>

      <Tabs active={active} onChange={onChange} controlled={controlled}>
        <Tabs.Head>
          <div>Today</div>
          <div>Yesterday</div>
          <div>All time</div>
        </Tabs.Head>
        <div>
          <Tabs.Content>
            <div>
              <div className={styles.item}>
                <div className={styles.label}>
                  Deals:
                </div>
                <div className={styles.value}>
                  9
                </div>
              </div>
              <div className={styles.line} />
              <div className={styles.item}>
                <div className={styles.label}>
                  Win rate:
                </div>
                <div className={styles.value}>
                  78%
                </div>
              </div>
              <div className={styles.line} />
              <div className={styles.item}>
                <div className={styles.label}>
                  Trading turnover:
                </div>
                <div className={styles.value}>
                  1200 USDС
                </div>
              </div>
              <div className={styles.line} />
              <div className={styles.item}>
                <div className={styles.label}>
                  Profit:
                </div>
                <div className={styles.value}>
                  +400 USDС
                </div>
              </div>
            </div>
            <div>second page</div>
            <div>third page</div>
          </Tabs.Content>
        </div>
      </Tabs>
    </div>
  );
};

export { StatisticsProfile };
