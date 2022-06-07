/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import rewards from '@option-blitz/libs/assets/images/staking/rightSideBar/Rewards.png';
import openInteres from '@option-blitz/libs/assets/images/staking/rightSideBar/OpenInteres.png';
import pool from '@option-blitz/libs/assets/images/staking/rightSideBar/Pool.png';
import rate from '@option-blitz/libs/assets/images/staking/rightSideBar/Rate.png';
import { OpenInterest } from '../../../components/staking/graf/OpenInterest/OpenInterest';
import ProjectTool from '../../../components/staking/graf/ProjectTool/ProjectTool';
import Referals from '../../../components/staking/graf/Referals/Referals';
import PoolBalance from '../../../components/staking/graf/LpPoolBalance/PoolBalance';
import { TradingVolume } from '../../../components/staking/graf/TradingVolume/TradingVolume';

const Analytics = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <OpenInterest/>
          <OpenInterest/>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <ProjectTool/>
          <PoolBalance/>
        </div>
      </div>
    </div>

  );
};

export default Analytics;
