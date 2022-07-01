/* eslint-disable */
import React, {FC, useState} from 'react';
import styles from "./styles.module.scss";
import cx from 'classnames';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import background from '../../../../../libs/assets/images/staking/stake/leftCard/background.png'
import bg from '../../../../../libs/assets/images/staking/stake/leftCard/Bg.png'
import buy from '../../../../../libs/assets/images/staking/stake/leftCard/buy.svg';
import Max from '@option-blitz/libs/assets/images/staking/stake/leftCard/Max';
import backgroundRight from '../../../../../libs/assets/images/staking/stake/rightCard/background.png'
import bgRight from '../../../../../libs/assets/images/staking/stake/rightCard/Bg.png'
import blx from '../../../../../libs/assets/images/staking/stake/rightCard/blx.svg'
import usdCoin from '../../../../../libs/assets/images/staking/stake/leftCard/usdCoin.svg'
import useResize from '@option-blitz/libs/hooks/useResize';
import {RightSidebarInput} from "@option-blitz/libs/components/rightSidebar/RightSidebarInput";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {Navigation} from "../../../constants/navigation/navigation";
import {useLeftNavigationBarHandlers} from "../../../hooks/leftSidebar/useLeftNavigationBarHandlers";

const Stake: FC = () => {

  const { isMobile } = useResize();
  const [numActive, setNumActive]=useState(4)
  const [activeButton, setActiveButton] = useState('stake')

  const {
    setActiveNavItem,
  } = useLeftNavigationBarHandlers();

const numbers = [
  {
    value: '4',
  },
  {
    value: '12',
  },
  {
    value: '24',
  },
  {
    value: '52',
  },
]
  return (
    <div>
      {isMobile && (
            <button className={styles.row_bottom_mob}
                    onClick={() => { setActiveNavItem(Navigation.Staking, false); }}>
              <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
              <div style={{marginLeft: '10px'}}>
                STAKE
              </div>
            </button>
      )}
     <div className={styles.description}>Enter the amount of funds you wish to stake,
       dual staking with BLX boosts rewards on USDС by up to 100%. Visit the BLX section
       to learn more how it works.
     </div>
      <div className={isMobile ? styles.card_wrap_mob : styles.card_wrap }>
        <div className={styles.left_card}>
          { isMobile && <div className={styles.gradient_first}></div>}
          {! isMobile && <img src={background}
               alt=''
               className={styles.background}
          />}
          {isMobile &&  <img src={bg} alt=''
                             className={styles.bg_mob}
          /> }
          { ! isMobile && <img src={bg} alt=''
               className={styles.bg}
          />}
          { isMobile &&
            <div className={styles.coin_mob}>
              <img src={usdCoin} alt='' />
              <div style={{fontSize: 12}}>USD</div>
            </div>
          }
          { !isMobile && <div className={styles.coin}>
            <img src={usdCoin} alt='' />
            <div>USD</div></div>}

          <img src={buy} alt='' className={isMobile? styles.buy_mob : styles.buy} />
          <div className={isMobile ? styles.balance_mob : styles.balance}> Balance: 0.0 USDC</div>
          <div className={ isMobile ? styles.in_mob : styles.in}>

            {isMobile && (
              <TextInput
                type={'text'}
                label={undefined}
                placeholder={'0'}
                className={styles.input}
                right={<Max/>}
              />
            )}
            {!isMobile && (
                <TextInput
                    type={'text'}
                    label={undefined}
                    placeholder={'0'}
                    className={styles.input}
                    right={<Max/>}
                />
            )}
          </div>
        </div>
        <div className={styles.right_card}>
          {isMobile && <div className={styles.gradient_second}></div>}
          { ! isMobile && <img src={backgroundRight}
               className={styles.background}
               alt='' />}
          <img src={bgRight} alt=''  className={isMobile ? styles.bg_right_mob : styles.bg_right}/>
          <div className={isMobile ? styles.coin_right_mob : styles.coin_right}><img src={blx} alt=''/>
            <div>BLX</div></div>

          <div className={isMobile ? styles.button_wrap_mob : styles.button_wrap}>
            <Button
              className={cx(isMobile ? styles.burn_button :styles.none,activeButton === 'stake' ? styles.buttonActive : styles.buttonUnActive)}
              onClick={()=>{setActiveButton('stake')}}
            >
              <p>STAKE</p>
            </Button>
            <Button
              className={cx(isMobile ? styles.burn_button :styles.none,activeButton === 'burn' ? styles.buttonActive : styles.buttonUnActive)}
              onClick={()=>{setActiveButton('burn')}}
            >
              <p>BURN</p>
            </Button>
          </div>
          <img src={buy} alt='' className={isMobile? styles.buy_mob : styles.buy} />
          <div className={isMobile ? styles.balance_mob :  styles.balance}> Balance: 0.0 USDC</div>
          <div className={isMobile ? styles.in_two_mob : styles.in_two}>
            {isMobile && (
              <TextInput
                type={'text'}
                label={undefined}
                placeholder={'0'}
                className={styles.input}
                right={<Max/>}
              />
            )}
            {!isMobile && (
                <TextInput
                    type={'text'}
                    label={undefined}
                    placeholder={'0'}
                    className={styles.input}
                    right={<Max/>}
                />
            )}
          </div>
          {!isMobile && (
              <div className={styles.card_description}>You can choose to stake or burn BLX to get
                payout boost. Burning BLX increases your boost multiplier significantly higher than staking,
                use the calculator to discover exactly how much.
              </div>
          )}
        </div>

        {isMobile && <div className={ styles.circle}> <FontIcon name={FontIconName.Plus} size={17} /> </div> }
      </div>

     <div className={styles.description}>Enter any duration to lock funds in liquidity pool to earn
       duration multiplier and boost reward. Or enter 0 for no lock duration to enable unstake and withdraw
       on demand.</div>
    <div className={styles.duration}>LOCK DURATION</div>

      <div style={{display: 'flex', alignItems: 'center'}} className={isMobile ? styles.box_mobile : styles.box}>
        <div className={isMobile ? styles.input_wrap_mobile : styles.input_wrap}>
          <TextInput
            type={'text'}
            label={undefined}
            placeholder={'Weeks'}
            className={styles.input}
          />
        </div>
        <div className={ isMobile ? styles.section_mobile : styles.section}>
          {numbers.map((item, i) => (

            <div className={numActive === i + 1 ? styles.valueActive : styles.value}
                 onClick={() => setNumActive(i + 1)}>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
        <div className={ isMobile ? styles.rez_mob : styles.rez}>
        <div className={styles.pool}>Pool share:</div>
        <div className={styles.num}>0%</div>
        <div className={styles.pool}>Est.APY</div>
        <div className={styles.num}>80%</div>
        </div>
      </div>
      <Button className={isMobile ? styles.confirm_mobile : styles.confirm}>CONFIRM</Button>
    </div>
  );
};

export default Stake;
