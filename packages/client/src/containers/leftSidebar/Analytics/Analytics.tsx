/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import { OpenInterest } from '../../../components/staking/graf/OpenInterest/OpenInterest';
import ProjectTool from '../../../components/staking/graf/ProjectTool/ProjectTool';
import PoolBalance from '../../../components/staking/graf/LpPoolBalance/PoolBalance';
import useResize from '@option-blitz/libs/hooks/useResize';

const Analytics = () => {

  const { isMobile } = useResize();

  return (
    <div className={styles.main}>
      {!isMobile &&<div className={styles.wrap}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <OpenInterest/>
          <OpenInterest/>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <ProjectTool/>
          <PoolBalance/>
        </div>
      </div>}
      {isMobile &&
      <div className={styles.mobile_wrap}>
        <OpenInterest />
        <PoolBalance />
        <ProjectTool />
      </div>

      }
    </div>

  );
};

export {Analytics};
