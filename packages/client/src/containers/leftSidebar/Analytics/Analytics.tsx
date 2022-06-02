/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import rewards from '@option-blitz/libs/assets/images/staking/rightSideBar/Rewards.png';
import openInteres from '@option-blitz/libs/assets/images/staking/rightSideBar/OpenInteres.png';
import pool from '@option-blitz/libs/assets/images/staking/rightSideBar/Pool.png';
import rate from '@option-blitz/libs/assets/images/staking/rightSideBar/Rate.png';
import { OpenInterest } from '../../../components/staking/graf/OpenInterest/OpenInterest';
import LineGraf from '../../../components/staking/graf/LpPoolBalance/LineGraf';

const Analytics = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <img src={rewards} alt=''/>
          <img src={openInteres} alt='' />
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <img src={pool} alt='' />
          <img src={rate} alt='' />
        </div>
        {/* <OpenInterest/> */}
        {/* <LineGraf/> */}
      </div>
    </div>

  );
};

export default Analytics;
