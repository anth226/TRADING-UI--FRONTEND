/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { BLXInput } from './BLXinput';
import { TargetPriceInput } from '../../../containers/leftSidebar/OpenPosition/TargetPriceInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import { BLXTab } from './BLXTab/BLXTab';

const BLX: FC = () => {
  const usds = 0
  const blx = 0
  return (
    <div>
      <div className={styles.description}>Dual staking BLX with USDС supercharges your rewards by up to 100%. Use the calculator
        below to work how much you can multiply your yield. Don’t have any BLX? Follow the links to
        buy it at the best price. Learn more about BLX and what else you can do with it here.
      </div>
      <div style={{marginTop:20, marginBottom:20}}>CALCULATOR</div>
      <div style={{display:'flex', justifyContent:'space-between', columnGap: 20}}>
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
        <TargetPriceInput
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
        <Button className={styles.boost} >1.00x</Button>
      </div>
      <div className={styles.first_block}>
        <div className={styles.bost}>BOOST</div>
        <div style={{display:'flex', justifyContent: 'space-between', marginTop:20}}>
          <div className={styles.max}>Max boost possible:<div className={styles.max_boost}>2.00x</div></div>
          <div className={styles.minimum}>Minimum BLX for max boost possible for USDC deposit amount and lock duration:<div>0 BLX</div></div>
        </div>
      </div>
      <div style={{marginBottom:10}}>BUY BLX</div>
      <div className={styles.description_second}>Below is a list of places you can buy BLX from at the best price</div>
      <BLXTab/>
      <Button className={styles.buy} >BUY</Button>

    </div>
  );
};

export default BLX;
