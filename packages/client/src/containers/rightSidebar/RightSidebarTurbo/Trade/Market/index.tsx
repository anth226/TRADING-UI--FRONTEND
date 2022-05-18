/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import cx from 'classnames';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import copy from '../../../../Modals/ModalIcons/copy.svg';
import { Letter, letterIcons } from '../../../../../constants/letters/letters';
import Button from '@option-blitz/libs/components/inputs/Button';

const Market = () => {

  return (
    <div>
      <div className={styles.checkbox_wrap}>
        <p className={styles.checkbox_label}>Take Profit</p>
        <Checkbox size={14} iconSize={7} checked={true} onCheck={()=>{}}/>
      </div>
      <div className={styles.second_input_wrap}>
        <RightSidebarInput
          className={cx(styles.input, styles.target_price)}
          label="Target price"
          symbol="$"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={'70.000.00'}
          firstBtnIcon={FontIconName.ArrowRight}
          secondBtnIcon={FontIconName.ArrowRight}
          firstIconClassName={styles.up_icon}
          secondIconClassName={styles.down_icon}
        />
        <RightSidebarInput
          className={styles.input}
          label="Target ROI"
          onFirstBtnClick={()=>{}}
          onSecondBtnClick={()=>{}}
          onChange={()=>{}}
          value={'16.5'}
          firstBtnIcon={FontIconName.ArrowRight}
          secondBtnIcon={FontIconName.ArrowRight}
          firstIconClassName={styles.up_icon}
          secondIconClassName={styles.down_icon}
        />
      </div>
      <div className={styles.summary_container}>
        <div className={styles.summary}>SUMMMARY:</div>
        <div className={styles.contract}>Contact info <img src={copy} alt='copy' className={styles.img_copy}/></div>
      </div>

      <div>
        <div className={styles.title_wrap}>
          <div className={styles.flex}>
            <img src={letterIcons[Letter.L]} alt="letter" />
            <p className={styles.title}>BTCUSD</p>
          </div>
          <div className={styles.time}>100x</div>
        </div>

        <div className={styles.item} >
          <p className={styles.item_label}>Strike price</p>
          <p className={styles.item_value}>$60,000.00</p>
        </div>
        <div className={styles.item}>
          <p className={styles.item_label}>Knock-out (barrier) price</p>
          <p className={styles.item_value}>$54,000.00</p>
        </div>
        <div className={styles.item}>
          <p className={styles.item_label}>Take profit price</p>
          <p className={styles.item_value}>$70,000.00</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>Current funding rate</p>
          <p className={styles.item_value}>-0.015%</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>Quantity</p>
          <p className={styles.item_value}>0.01 BTC</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>Transaction fee</p>
          <p className={styles.item_value}>60 USDT | 30 BLX</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>Turbo price</p>
          <p className={styles.item_value}>6000 USDC</p>
        </div>

      </div>


      <Button  className={styles.button_trade}>
        PLACE TRADE: 6000 USDC
      </Button>

    </div>
  );
};

export default Market;
