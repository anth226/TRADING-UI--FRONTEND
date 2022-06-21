/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import backgound from '../../../../libs/assets/images/staking/background.png'
import blur from '../../../../libs/assets/images/staking/blur.svg'
import sun from '../../../../libs/assets/images/staking/sun.svg'
import rocket from '../../../../libs/assets/images/staking/rocket.svg'
import coinGroup from '../../../../libs/assets/images/staking/coinGroup.svg'
import { StakingIcon } from '../../components/staking/StakingIcon';
import { UnstakeIcon } from '../../components/staking/UnstakeIcon';
import { BlxIcon } from '../../components/staking/BlxIcon';
import Stake from '../../components/staking/StakeTab/Stake';
import BLX from '../../components/staking/BlxTab/BLX';
import Unstake from '../../components/staking/UnstakeTab/Unstake';
import useResize from '@option-blitz/libs/hooks/useResize';

interface Props {
  active: number;
  isMobile?: boolean
}

const navigation = [
  {
    title:'STAKE',
    icon: <StakingIcon color={'#fff'}/>,
  },
  {
    title:'UNSTAKE',
    icon:<UnstakeIcon color={'#fff'}/>,

  },
  {
    title:'BLX',
    icon:<BlxIcon color={'#fff'}/>,

  },
]


const Staking:FC<Props> = ({active, isMobile}) => {

  // const { isMobile } = useResize();

  const [activeItem, setActiveItem] = useState(active)

  const whichTab = () => {
    switch (activeItem) {
      case 1:
        return <Stake/>
      case 2:
        return <Unstake/>
      case 3:
        return  <BLX/>
      default:
        return <Stake/>
    }
  }

  return (
    <div className={isMobile ?styles.wrap_mobile :styles.wrap}>
      <div className={isMobile ? styles.wrap_one_mobile : styles.wrap_one}>
        {!isMobile && <> <div className={styles.first_line}>
          <div className={styles.card}>
            <div className={styles.summary}>STAKING</div>
            <img src={backgound} alt='' />
            <img src={coinGroup} alt=''  className={styles.coin}/>
            <div className={styles.box}>
              <div className={styles.total}>TOTAL VALUE LOCKED</div>
              <div className={styles.value}>$1,000,000</div>
            </div>
            <div className={styles.box_second}>
              <div className={styles.total}>24H VOLUME</div>
              <div className={styles.value}>$5,000,000</div>
            </div>
          </div>
          <div>
            <div className={styles.summary}>YOUR SUMMARY</div>
            <div className={styles.border_box}>
              <div style={{display:'flex', flexDirection:'column', rowGap: 8, width: 225 }}>
                <div className={styles.first}>Staked amount:    <div className={styles.second_value }> 0 USDC 0 BLX</div></div>
                <div className={styles.first}>Pool share:<div className={styles.second_value}>0%</div></div>
                <div className={styles.first}>Total rewards:<div className={styles.second_value}>0 USDC</div></div>
                <div className={styles.first}>Lock duration:<div className={styles.second_value}>0 weeks</div></div>
              </div>
              <div className={styles.vertical_line}></div>
              <div style={{display:'flex', flexDirection: 'column', rowGap: 12,}}>
                <div className={styles.first}>Estimated APY:</div>
                <div style={{display:'flex', columnGap: 15,}}>
                  <div className={styles.mini_box}>
                    <div style={{display:'flex', columnGap:5, alignItems:'center', marginBottom:5}}><img src={blur} alt='' />LOW</div>
                    <div className={styles.green_value}>25%</div>
                  </div>
                  <div className={styles.mini_box}>
                    <div style={{display:'flex', columnGap:5, alignItems:'center', marginBottom:5}}><img src={sun} alt='' />MID</div>
                    <div className={styles.green_value}>40%</div>
                  </div>
                  <div className={styles.mini_box}>
                    <div style={{display:'flex', columnGap:5, alignItems:'center', marginBottom:5}}><img src={rocket} alt='' />HIGH</div>
                    <div className={styles.green_value}>80%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></>}

        {!isMobile && <>
          <div className={styles.navigation}>
            {navigation.map((link, i) => (
              <div className={activeItem === i + 1 ? styles.navItemActive : styles.navItem}
                   onClick={() => setActiveItem(i + 1)}>
                {link.icon}
                <div>{link.title}</div>
              </div>
            ))}
          </div>
        </>}

      {whichTab()}
      </div>
    </div>
  );
};
export { Staking };
