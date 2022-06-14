/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss'
import live from '../../../../../libs/assets/images/balances/CardBalance/LiveBalance.svg'
import bonus from '../../../../../libs/assets/images/balances/CardBalance/BonusBalance.svg'
import blx from '../../../../../libs/assets/images/balances/CardBalance/BlxBalance.svg'
const CardBalance = () => {

  const liveBalance = '1000.00'
  const bonusBalance = '300.00'
  const blxBalance = '500.00'

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div style={{display:'flex', alignItems: 'center'}}>
          <img src={live} alt='' />
          <div className={styles.title}>
            LIVE BALANCE
          </div>
        </div>
        <div>
          <div className={styles.coin_name}>TETHER</div>
          <div className={styles.value}>{liveBalance}
              <div className={styles.description}>USDT</div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div style={{display:'flex', alignItems: 'center'}}>
          <img src={bonus} alt='' />
          <div className={styles.title}>
            BONUS BALANCE
          </div>
        </div>
        <div>
          <div className={styles.coin_name}>TETHER</div>
          <div className={styles.value}>{bonusBalance}
            <div className={styles.description}>BLZ</div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div style={{display:'flex', alignItems: 'center'}}>
          <img src={blx} alt='' />
          <div className={styles.title}>
            BLX BALANCE
          </div>
        </div>
        <div>
          <div className={styles.coin_name}>TETHER</div>
          <div className={styles.value}>{blxBalance}
            <div className={styles.description}>BLX</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBalance;
