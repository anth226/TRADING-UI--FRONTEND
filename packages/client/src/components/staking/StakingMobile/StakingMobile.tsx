/* eslint-disable */
import React, { useCallback } from 'react';
import styles from './styles.module.scss';
import blur from '@option-blitz/libs/assets/images/staking/blur.svg';
import sun from '@option-blitz/libs/assets/images/staking/sun.svg';
import rocket from '@option-blitz/libs/assets/images/staking/rocket.svg';
import molot from '../../../../../libs/assets/images/staking/stakeMobile/molot.svg';
import handle from '../../../../../libs/assets/images/staking/stakeMobile/hand.svg';
import arrow from '../../../../../libs/assets/images/staking/stakeMobile/Union (2).svg';
import blx from '../../../../../libs/assets/images/staking/stakeMobile/Blx balance icon.svg';
import opacity from '../../../../../libs/assets/images/staking/stakeMobile/opacity.svg';
import iconMaim from '../../../../../libs/assets/images/staking/stakeMobile/iconMain.svg';
import {Navigation} from "../../../constants/navigation/navigation";
import {
  useLeftNavigationBarHandlers
} from '../../../hooks/leftSidebar/useLeftNavigationBarHandlers';


const StakingMobile = () => {

  const {
    setActiveNavItem,
  } = useLeftNavigationBarHandlers();


  return (
    <div className={styles.main_container}>
      <div className={styles.title }>STAKING</div>
      <div className={styles.picture}>
        <div className={styles.background}></div>
        <img src={opacity} alt='' className={styles.opacity} />
        <img src={iconMaim} alt='' className={styles.mainIcons} />
        <div className={styles.left}>
          <div className={styles.text}>Total value locked</div>
          <div className={styles.num}>$ 1,000,000</div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>24h volume</div>
          <div className={styles.num}>$ 5,000,000</div>
        </div>

      </div>
      <div className={styles.container}>
          <div className={styles.summary}>YOUR SUMMARY</div>
        <div className={styles.wrap}>
          <div className={styles.first}>
            <div>Staked amont:</div>
            <div>Pool share:</div>
            <div>Total rewards:</div>
            <div>Lock duration:</div>
            <div>Estimated APY:</div>
          </div>

          <div className={styles.second}>
            <div>0 USDC 0 BLX</div>
            <div>0%</div>
            <div>0 USDC</div>
            <div>0 weeks</div>
          </div>
        </div>

        <div className={styles.second_wrap}>

          <div className={styles.box}>
           <div className={styles.row}> <img src={blur} alt='' /> <div> LOW</div></div>
            <div className={styles.value}>25%</div>
          </div>

          <div className={styles.box}>
            <div className={styles.row}><img src={sun} alt='' /> <div>MID</div></div>
            <div className={styles.value}>25%</div>
          </div>


          <div className={styles.box}>
            <div className={styles.row}> <img src={rocket} alt='' /> <div>HIGH</div></div>
            <div className={styles.value}>25%</div>
          </div>


        </div>

      </div>

      <div className={styles.container_second}>
        <div className={styles.boxes}
             onClick={() => { setActiveNavItem(Navigation.Staking, false); }}>
          <div><img src={molot} alt='' /></div>
          <div className={styles.description}>
            STAKE
          </div>
        </div>

        <div className={styles.boxes}
             onClick={() => { setActiveNavItem(Navigation.UnStake, false); }}
        >
          <div><img src={handle} alt='' /></div>
          <div className={styles.description}>
            UNSTAKE
          </div>
        </div>

        <div className={styles.boxes}
             onClick={() => { setActiveNavItem(Navigation.Analytics, false); }}
        >
          <div><img src={arrow} alt='' /></div>
          <div className={styles.description}
          >
            ANALYTICS
          </div>
        </div>

        <div className={styles.boxes}
             onClick={() => { setActiveNavItem(Navigation.BLX, false); }}
        >
          <div><img src={blx} alt='' /></div>
          <div className={styles.description}
          >
            BLX
          </div>
        </div>

      </div>
    </div>
  );
};

export default StakingMobile;
