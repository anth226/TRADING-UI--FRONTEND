/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import { OpenInterest } from '../../../components/staking/graf/OpenInterest/OpenInterest';
import ProjectTool from '../../../components/staking/graf/ProjectTool/ProjectTool';
import PoolBalance from '../../../components/staking/graf/LpPoolBalance/PoolBalance';
import useResize from '@option-blitz/libs/hooks/useResize';
import {useLeftNavigationBarHandlers} from "../../../hooks/leftSidebar/useLeftNavigationBarHandlers";
import {Navigation} from "../../../constants/navigation/navigation";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";

const Analytics = () => {

  const { isMobile } = useResize();
  const {
    setActiveNavItem,
  } = useLeftNavigationBarHandlers();

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

            <button className={styles.row_bottom_mob}
                    onClick={() => { setActiveNavItem(Navigation.Stake, false); }}>
              <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
              <div style={{marginLeft: '10px'}}>
                Analytics
              </div>
            </button>

        <OpenInterest />
        <PoolBalance />
        <ProjectTool />
      </div>

      }
    </div>

  );
};

export {Analytics};
