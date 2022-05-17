/* eslint-disable */
import React from 'react';
import  styles from './styles.module.scss'
import { Letter, letterIcons } from '../../../constants/letters/letters';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import cx from 'classnames';




const TurboPositions = () => {

  const price = '65.000.00'
  const targerPrice = '199'
  const roi = '0'
  const data =[
    {
      label: 'BTCUSD',
      time:'20-12-26 17:15:45',
      size: 'Size',
      sizeValue: '1.01 BTC',
      strikePrice: 'Strike price',
      strikePriceValue: '$ 60.000.00',
      KnockOutPrice:'Knock-out price',
      KnockOutPriceValue:'$ 54.000.00',
      PNL:'Unrealized PNL (%ROI)',
      PNLValue:'-$200(-3.00%)',
    },
  ]

  return (
    <div className={styles.wrap}>
      {data.map(item => (
        <div>

        <div className={styles.title_wrap}>
          <div className={styles.flex}>
          <img src={letterIcons[Letter.L]} alt="letter" />
          <p className={styles.title}>BTCUSD</p>
          <p className={styles.sox}>SOX</p>
          </div>
          <div className={styles.time}>{item.time}</div>
        </div>

        <div className={styles.item} key={item.size}>
          <p className={styles.item_label}>{item.size}</p>
          <p className={styles.item_value}>{item.sizeValue}</p>
        </div>
          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.strikePrice}</p>
            <p className={styles.item_value}>{item.strikePriceValue}</p>
          </div>
          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.KnockOutPrice}</p>
            <p className={styles.item_value}>{item.KnockOutPriceValue}</p>
          </div>
          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.PNL}</p>
            <p className={styles.item_value}>{item.PNLValue}</p>
          </div>

        </div>
      ))}
      <div className={styles.profit}>TAKE PROFIT</div>
        <div className={styles.input_wrap}>
        <RightSidebarInput
          className={styles.input}
          label="Target price"
          symbol="$"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={targerPrice}
          firstBtnIcon={FontIconName.ArrowRight}
          secondBtnIcon={FontIconName.ArrowRight}
          firstIconClassName={styles.up_icon}
          secondIconClassName={styles.down_icon}
        />
        <RightSidebarInput
          className={styles.input}
          label="Target ROI"
          symbol="%"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={roi}
          firstBtnIcon={FontIconName.ArrowRight}
          secondBtnIcon={FontIconName.ArrowRight}
          firstIconClassName={styles.up_icon}
          secondIconClassName={styles.down_icon}
        />
        </div>

      <div className={styles.buttons_wrap}>
        <Button
          color="transparent_primary"
          className={cx(styles.button, styles.target_price_btn)}

        >
          - target price
        </Button>
        <Button
          color="transparent_primary"
          className={styles.button}
        >
          sell
        </Button>
        <Button
          className={styles.button}
          color="primary"
        >
          settle
        </Button>
      </div>
      <hr className={styles.hr}/>

      {data.map(item => (
        <div>

          <div className={styles.title_wrap}>
            <div className={styles.flex}>
              <img src={letterIcons[Letter.L]} alt="letter" />
              <p className={styles.title}>BTCUSD</p>
              <p className={styles.sox}>SOX</p>
            </div>
            <div className={styles.time}>{item.time}</div>
          </div>

          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.size}</p>
            <p className={styles.item_value}>{item.sizeValue}</p>
          </div>
          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.strikePrice}</p>
            <p className={styles.item_value}>{item.strikePriceValue}</p>
          </div>
          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.KnockOutPrice}</p>
            <p className={styles.item_value}>{item.KnockOutPriceValue}</p>
          </div>
          <div className={styles.item} key={item.size}>
            <p className={styles.item_label}>{item.PNL}</p>
            <p className={styles.item_value}>{item.PNLValue}</p>
          </div>

        </div>
      ))}

      <div className={styles.buttons_wrap}>
        <Button
          color="transparent_primary"
          className={cx(styles.button, styles.target_price_btn)}

        >
          - target price
        </Button>
        <Button
          color="transparent_primary"
          className={styles.button}
        >
          sell
        </Button>
        <Button
          className={styles.button}
          color="primary"
        >
          settle
        </Button>
      </div>

    </div>
  );
};

export default TurboPositions;


