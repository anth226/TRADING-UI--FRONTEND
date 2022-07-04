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
          <OpenInterest width={675} height={470}/>
          <OpenInterest width={675} height={470}/>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <ProjectTool/>
          <PoolBalance/>
        </div>
      </div>}
      {isMobile &&
      <div className={styles.mobile_wrap}>

            <button className={styles.row_bottom_mob}
                    onClick={() => { setActiveNavItem(Navigation.Staking, false); }}>
              <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
              <div style={{marginLeft: '10px'}}>
                Analytics
              </div>
            </button>

        <OpenInterest width={390} height={350} />
        <div className={styles.interest_footer}>
          <div className={styles.footer_blue_border}></div>
          <div className={styles.footer_item}>Amount in USD</div>
        </div>
        <PoolBalance />
        <ProjectTool />
      </div>

      }
    </div>

  );
};

export {Analytics};
