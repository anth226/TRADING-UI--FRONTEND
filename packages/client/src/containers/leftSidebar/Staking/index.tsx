/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import backgound from '../../../../../libs/assets/images/staking/background.png'
import coin from '../../../../../libs/assets/images/staking/power.png'

interface Props {
  onBack?: () => void
  isMobile?: boolean
}

const Staking: FC<Props> = ({
                           onBack,
                           isMobile,
                         }) => {

  return (

    <div className={styles.wrap}>
      <div>
        <div className={styles.card}>
          <img src={backgound} alt='' className={styles.back}/>
          <img src={coin} alt=''  className={styles.coin}/>
          <div className={styles.box}>
            <div className={styles.total}>TOTAL VALUE LOCKED</div>
            <div className={styles.value}>$1,000,000</div>
          </div>
          <div className={styles.box_second}>
            <div className={styles.total}>24H VOLUME</div>
            <div className={styles.value}>$5,000,000</div>
          </div>
        </div>
      </div>

    </div>
  );
};
export { Staking };
