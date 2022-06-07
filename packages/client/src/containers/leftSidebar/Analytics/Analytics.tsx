/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import { OpenInterest } from '../../../components/staking/graf/OpenInterest/OpenInterest';
import ProjectTool from '../../../components/staking/graf/ProjectTool/ProjectTool';
import PoolBalance from '../../../components/staking/graf/LpPoolBalance/PoolBalance';

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
