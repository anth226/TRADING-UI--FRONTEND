/* eslint-disable */
import React, {FC, useState} from 'react';
import styles from "./styles.module.scss";
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

const Stake: FC = () => {
  const [numActive, setNumActive]=useState(4)
  const [activeButton, setActiveButton] = useState('stake')

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
     <div className={styles.description}>Enter the amount of funds you wish to stake, dual staking with BLX boosts rewards on USDС by up to 100%. Visit the BLX section to learn more how it works.</div>
      <div style={{display:'flex'}}>
        <div className={styles.left_card}>
          <img src={background} alt=''  className={styles.background}/>
          <img src={bg} alt='' className={styles.bg} />
          <div className={styles.coin}><img src={usdCoin} alt='' /> <div>USD</div></div>

          <img src={buy} alt='' className={styles.buy} />
          <div className={styles.balance}> Balance: 0.0 USDC</div>
          <div className={styles.in}>
            <TextInput
              type={'text'}
              label={undefined}
              placeholder={'0'}
              className={styles.input}
              right={<Max/>}
            />
          </div>
        </div>
        <div className={styles.right_card}>
          <img src={backgroundRight} className={styles.background} alt='' />
          <img src={bgRight} alt=''  className={styles.bg_right}/>
          <div className={styles.coin_right}><img src={blx} alt=''/><div>BLX</div></div>
          <div className={styles.button_wrap}>
            <Button
              className={activeButton === 'stake' ? styles.buttonActive : styles.buttonUnActive}
              onClick={()=>{setActiveButton('stake')}}
            >
              <p>STAKE</p>
            </Button>
            <Button
              className={activeButton === 'burn' ? styles.buttonActive : styles.buttonUnActive}
              onClick={()=>{setActiveButton('burn')}}
            >
              <p>BURN</p>
            </Button>
          </div>
          <img src={buy} alt='' className={styles.buy} />
          <div className={styles.balance}> Balance: 0.0 USDC</div>
          <div className={styles.in_two}>
            <TextInput
              type={'text'}
              label={undefined}
              placeholder={'0'}
              className={styles.input}
              right={<Max/>}
            />
          </div>
          <div className={styles.card_description}>You can choose to stake or burn BLX to get payout boost. Burning BLX increases your boost multiplier significantly higher than staking, use the calculator to discover exactly how much.</div>
        </div>
      </div>

     <div className={styles.description}>Enter any duration to lock funds in liquidity pool to earn duration multiplier and boost reward. Or enter 0 for no lock duration to enable unstake and withdraw on demand.</div>
    <div className={styles.duration}>LOCK DURATION</div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className={styles.input_wrap}>
          <TextInput
            type={'text'}
            label={undefined}
            placeholder={'Weeks'}
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          {numbers.map((item, i) => (
            <div className={numActive === i + 1 ? styles.valueActive : styles.value} onClick={() => setNumActive(i + 1)}>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex', alignItems: 'flex-end'}}>
        <div className={styles.pool}>Pool share:</div>
        <div className={styles.num}>0%</div>
        <div className={styles.pool}>Est.APY</div>
        <div className={styles.num}>80%</div>
        </div>
      </div>
      <Button className={styles.confirm}>CONFIRM</Button>


    </div>
  );
};

export default Stake;
