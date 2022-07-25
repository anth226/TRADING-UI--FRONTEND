/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import eth from '../../../../../libs/assets/images/staking/unStake/eth.svg';
import cupMobile from '../../../../../libs/assets/images/staking/unStake/cupMobile.svg';
import cupDesctop from '../../../../../libs/assets/images/staking/unStake/cupDesktop.svg';
import dol from '../../../../../libs/assets/images/staking/unStake/dol.svg';
import star from '../../../../../libs/assets/images/staking/unStake/star.png';
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


  const cards = [
    {
      title:'STAKED: 0 USDC',
      background:isMobile ? styles.bg_one_mobile : styles.bg_one,
      img:isMobile ? eth : dol,
      input:
        <TextInput
          type={'text'}
          label={undefined}
          placeholder={'0'}
          className={styles.input}
          right={<Max/>}
        />
    },
    {
      title:'STAKED: 0 USDC',
      background:isMobile ? styles.bg_two_mobile : styles.bg_two,
      img:star,
      input:
        <TextInput
          type={'text'}
          label={undefined}
          placeholder={'0'}
          className={styles.input}
          right={<Max/>}
        />
    },
    {
      title:'REWARDS: 0 USDC',
      background:isMobile ? styles.bg_three_mobile : styles.bg_three,
      img:isMobile ? cupMobile : cupDesctop,
      input:
        <TextInput
          type={'text'}
          label={undefined}
          placeholder={'0'}
          className={styles.input}
          right={<Max/>}
        />
    }
    ]
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
        {cards.map((item)=>
          <div className={styles.wrapers}>
            <div className={ item.background}></div>
            <img src={item.img} alt='' className={styles.img}/>
            <div className={ isMobile ? styles.in_mobile : styles.in}>
              {item.input}
            </div>
            <div className={styles.staked}>{item.title}</div>
          </div>
        )}
        <div className={ isMobile ? styles.plus_mobile : styles.plus_desktop}> <FontIcon name={FontIconName.Plus} size={17} /> </div>
        <div className={ isMobile ? styles.plus_second_mobile : styles.plus_second_desktop}> <FontIcon name={FontIconName.Plus} size={17} /> </div>
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

      {isMobile && <div>
        <Button className={styles.unstake_mobile}>UNSTAKE</Button>
      </div>}


    </div>
  );
};

export default Unstake;
