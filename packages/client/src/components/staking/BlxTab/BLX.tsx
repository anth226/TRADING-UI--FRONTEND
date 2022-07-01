/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import {FontIcon, FontIconName} from '@option-blitz/libs/components/inputs/FontIcon';
import { BLXInput } from './BLXinput';
import Button from '@option-blitz/libs/components/inputs/Button';
import { BLXTab } from './BLXTab/BLXTab';
import useResize from '@option-blitz/libs/hooks/useResize';
import { LockDuration } from '../LockDuration';
import { Navigation } from '../../../constants/navigation/navigation';
import {
  useLeftNavigationBarHandlers
} from '../../../hooks/leftSidebar/useLeftNavigationBarHandlers';

const BLX: FC = () => {
  const { isMobile } = useResize();

  const {
    setActiveNavItem,
  } = useLeftNavigationBarHandlers();

  const usds = 0
  const blx = 0
  return (
    <div className={styles.height}>
        {isMobile && (
            <button className={styles.row_bottom_mob}
                    onClick={() => { setActiveNavItem(Navigation.Staking, false); }}
            >
                <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
                <div style={{marginLeft: '10px'}}>
                    BLX
                </div>
            </button>
        )}
      <div className={styles.description}>Dual staking BLX with USDС supercharges your rewards by up to 100%. Use the calculator
        below to work how much you can multiply your yield. Don’t have any BLX? Follow the      links to
        buy it at the best price. Learn more about BLX and what else you can do with it here.
      </div>
      <div style={{marginTop:20, marginBottom:20}}>CALCULATOR</div>
      <div className={isMobile ? styles.buttons_mobile :  styles.buttons} >
        <BLXInput
          className={styles.btn}
          label="USDS DEPOSIT:"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={usds}
          firstBtnIcon={FontIconName.Plus}
          secondBtnIcon={FontIconName.Minus}
          secondIconClassName={styles.minus}
        />
        <BLXInput
          className={styles.btn}
          label="BLX DEPOSIT:"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={blx}
          firstBtnIcon={FontIconName.Plus}
          secondBtnIcon={FontIconName.Minus}
          secondIconClassName={styles.minus}
        />
        <LockDuration
          className={styles.btn}
          label="LOCK DURATION:"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={'2 weeks'}
          firstBtnIcon={FontIconName.ArrowRight}
          secondBtnIcon={FontIconName.ArrowRightBold}
          secondIconClassName={styles.minus}
        />
        <Button className={isMobile ? styles.boost_mobile : styles.boost} >1.00x</Button>
      </div>

      { !isMobile &&
        <div className={styles.first_block}>
        <div className={styles.bost}>BOOST</div>
        <div style={{display:'flex', justifyContent: 'space-between', marginTop:20}}>
          <div className={styles.max}>Max boost possible:<div className={styles.max_boost}>2.00x</div></div>
          <div className={styles.minimum}>Minimum BLX for max boost possible for USDC deposit amount and lock duration:<div>0 BLX</div></div>
        </div>
      </div> }

      {isMobile &&
        <div className={styles.first_block_mobile}>
          <div className={styles.bost}>BOOST</div>
          <div style={{display:'flex'}}>
            <div className={styles.max_mobile}>Max boost possible:</div>
            <div className={styles.max_boost_mobile}>2.00x</div>
          </div>
          <div style={{display:'flex', marginTop:8}}>
            <div className={styles.max_mobile}>Minimum BLX for max boost possible for USDC deposit amount and lock duration:</div>
            <div className={styles.max_boost_mobile} style={{display: 'flex', flexDirection: 'column'}}>0 BLX
              <div style={{display:'flex'}}>
                <Button
                  className={styles.stake}
                >
                  <p>STAKE</p>
                </Button>
                <Button
                  className={styles.burn}
                >
                  <p>BURN</p>
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.choose_boost}>
            <p>
              You can choose to stake or burn BLX to get payout boost.
              Burning BLX increases your boost multiplier significantly higher than staking, use the calculator to discover exactly how much.
            </p>
          </div>
        </div> }

      <div style={{marginBottom:10}}>BUY BLX</div>
      <div className={styles.description_second}>Below is a list of places you can buy BLX from at the best price</div>
      <BLXTab/>
      <Button className={ isMobile ? styles.buy_mobile : styles.buy} >BUY</Button>

    </div>
  );
};

export default BLX;
