/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import eth from '../../../../../libs/assets/images/staking/unStake/eth.svg';
import cupMobile from '../../../../../libs/assets/images/staking/unStake/cupMobile.svg';
import cupDesctop from '../../../../../libs/assets/images/staking/unStake/cupDesktop.svg';
import dol from '../../../../../libs/assets/images/staking/unStake/dol.svg';
import razer from '../../../../../libs/assets/images/staking/unStake/razer.svg';
import star from '../../../../../libs/assets/images/staking/unStake/star.png';
import tron from '../../../../../libs/assets/images/staking/unStake/tron.png';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Max from '@option-blitz/libs/assets/images/staking/stake/leftCard/Max';
import Button from '@option-blitz/libs/components/inputs/Button';
import useResize from '@option-blitz/libs/hooks/useResize';
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import { Navigation } from '../../../constants/navigation/navigation';
import {
  useLeftNavigationBarHandlers
} from '../../../hooks/leftSidebar/useLeftNavigationBarHandlers';

const Unstake: FC = () => {

  const { isMobile } = useResize();

  const {
    setActiveNavItem,
  } = useLeftNavigationBarHandlers();

  return (
    <div>
      {isMobile && (
          <button className={styles.row_bottom_mob}
                  onClick={() => { setActiveNavItem(Navigation.Staking, false); }}
          >
            <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
            <div style={{marginLeft: '10px'}}>
              UNSTAKE
            </div>
          </button>
      )}
      <div className={styles.description}>Withdraw funds from the liquidity pool and claim your rewards. Unstaking transfers funds
        to your live balance. Funds left after lock period ends continue to yield at the same level.
      </div>
      <div className={styles.enter}>Enter the amount of funds you wish to withdraw</div>
      <div className={isMobile ? styles.column : styles.row}>
        <div className={styles.wrapers}>
          <div className={ isMobile ? styles.bg_one_mobile : styles.bg_one}></div>
          {/* <img src={bgFirst} alt='' className={styles.bg}/> */}
          <img src={isMobile ? eth : dol} alt='' className={styles.img}/>
          <div className={ isMobile ? styles.in_mobile : styles.in}>
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

      <div className={styles.wrapers}>
        <div className={isMobile ? styles.bg_two_mobile : styles.bg_two}></div>
        <img src={star} alt='' className={styles.img}/>
        <div className={ isMobile ? styles.in_mobile : styles.in}>
          <TextInput
            type={'text'}
            label={undefined}
            placeholder={'0'}
            className={styles.input}
            right={<Max/>}
          />
        </div>
        <div className={styles.staked}>STAKED: 0 BLX</div>
      </div>

        <div className={styles.wrapers}>
          <div className={ isMobile ? styles.bg_three_mobile : styles.bg_three}></div>
          <img src={isMobile ? cupMobile : cupDesctop} alt='' className={styles.img}/>
          <div className={ isMobile ? styles.in_mobile : styles.in}>
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
        {isMobile && <div className={styles.circle}> <FontIcon name={FontIconName.Plus} size={17} /> </div> }
        {isMobile && <div className={styles.circle_second}> <FontIcon name={FontIconName.Plus} size={17} /> </div> }

      </div>
      <div style={{display:'flex', columnGap: 20, marginTop: 5}}>
        <div>
          <div className={styles.lock}>Lock period remaining: <div>0d:0m:0s</div></div>
          <div className={styles.pool}>Pool share:
            <div>0%</div>
            <div className={styles.pool}>Est. APY:<div>80%</div></div>
          </div>
        </div>
        {!isMobile &&<Button className={styles.unstake}>UNSTAKE</Button>}
      </div>
      {isMobile && <div className={styles.test}>
        <Button className={styles.unstake_mobile}>UNSTAKE</Button>
      </div>}


    </div>
  );
};

export default Unstake;
