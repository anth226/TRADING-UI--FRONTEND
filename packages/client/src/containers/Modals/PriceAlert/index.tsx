/* eslint-disable */
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { OptionItem } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { OnChangeValue } from 'react-select';
import Button from '@option-blitz/libs/components/inputs/Button';
import img from '../../../../../libs/assets/images/eurUsdFlag.png'
interface Props {
  active?: boolean
  setActive?: any
  onChange?: (e: OnChangeValue<OptionItem, false>) => void
  className?: string
  isMobile?:boolean
}


const PriceAlert = ({active, setActive, isMobile }:Props) => {

  const close = () => {
    setActive(false);
  };

  const usd = 'EUR/USD'
  const value  = '+10.06 to 1.3456'

  return (
      <div className={active ? styles.background : styles.modalInviseble}>
        <div className={styles.modal}>
          <div className={styles.alert}>
            <div className={styles.pointer}>
              <FontIcon name={FontIconName.Statistics} size={15} className={styles.iconStatistic} />
              <div>PRICE ALERT!</div>
            </div>
            <button type='button' onClick={close}>
              <FontIcon name={FontIconName.Close} size={15} />
            </button>
          </div>
          <div className={styles.main}>
            <div className={styles.flag}>
              <img src={img} alt=''/>
            </div>
            <div className={styles.title}>{usd} is up <div className={styles.value}>{value}</div></div>
            <div className={styles.hours}>in the last 2 hours</div>

            <div className={styles.message}>ALERT MESSAGE</div>
            <div className={styles.border}>
              <div className={styles.description}>
                Hey! Go to binary options and start trading now!
              </div>
            </div>
            <Button className={styles.ok}>OK</Button>
          </div>
        </div>
      </div>
  );
};
export { PriceAlert };
