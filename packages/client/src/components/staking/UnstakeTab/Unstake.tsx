/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import bgFirst from '../../../../../libs/assets/images/staking/unStake/first.png';
import bgSecond from '../../../../../libs/assets/images/staking/unStake/second.png';
import bgThird from '../../../../../libs/assets/images/staking/unStake/third.png';
import dol from '../../../../../libs/assets/images/staking/unStake/dol.png';
import star from '../../../../../libs/assets/images/staking/unStake/star.png';
import tron from '../../../../../libs/assets/images/staking/unStake/tron.png';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Max from '@option-blitz/libs/assets/images/staking/stake/leftCard/Max';
import Button from '@option-blitz/libs/components/inputs/Button';

const Unstake: FC = () => {
  return (
    <div>
      <div className={styles.description}>Withdraw funds from the liquidity pool and claim your rewards. Unstaking transfers funds
        to your live balance. Funds left after lock period ends continue to yield at the same level.
      </div>
      <div className={styles.enter}>Enter the amount of funds you wish to withdraw</div>
      <div style={{display: 'flex'}}>
        <div style={{position: 'relative'}}>
          <img src={bgFirst} alt='' className={styles.bg}/>
          <img src={dol} alt='' className={styles.dol}/>
          <div className={styles.in}>
            <TextInput
              type={'text'}
              label={undefined}
              placeholder={'0'}
              className={styles.input}
              right={<Max/>}
            />
          </div>
          <div className={styles.staked}>STAKED: 0 USDC</div>
        </div>

      <div style={{position: 'relative'}}>
        <img src={bgSecond} alt='' />
        <img src={star} alt='' className={styles.dol}/>
        <div className={styles.in}>
          <TextInput
            type={'text'}
            label={undefined}
            placeholder={'0'}
            className={styles.input}
            right={<Max/>}
          />
        </div>
        <div className={styles.staked}>STAKED: 0 USDC</div>
      </div>

        <div style={{position: 'relative'}}>
          <img src={bgThird} alt='' />
          <img src={tron} alt='' className={styles.dol}/>
          <div className={styles.in}>
            <TextInput
              type={'text'}
              label={undefined}
              placeholder={'0'}
              className={styles.input}
              right={<Max/>}
            />
          </div>
          <div className={styles.staked}>REWARDS: 0 USDC</div>
        </div>

      </div>
      <div style={{display:'flex', columnGap: 20, marginTop: 5}}>
        <div>
          <div className={styles.lock}>Lock period remaining: <div>0d:0m:0s</div></div>
          <div className={styles.pool}>Pool share:
            <div>0%</div>
            <div className={styles.pool}>Est. APY:<div>80%</div></div>
          </div>
        </div>
        <Button className={styles.unstake}>UNSTAKE</Button>
      </div>


    </div>
  );
};

export default Unstake;
