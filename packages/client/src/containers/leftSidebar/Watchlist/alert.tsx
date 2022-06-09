/* eslint-disable*/
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import arrowBack from '@option-blitz/libs/assets/images/arrow-back.svg';
import Button from '@option-blitz/libs/components/inputs/Button';
import { CreatePriceAlert } from '../../Modals/CreatePriceAlert';
import { PriceAlert } from '../../Modals/PriceAlert';

interface Props {
  close?: () => void
  back?:any
  isMobile?: boolean
}

const Alert: FC<Props>  = ({ close, back, isMobile}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [testAlert, setTestAlert]=useState(false)
  const handleChange = () => {
    setModalVisible(true)
  }
  const testChange = () => {
    setTestAlert(true)
  }
function goBack() {
  back(false)
}
  return (

    <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
        <div className={styles.title_wrap}>
          <p className={styles.alert} onClick={goBack}>
            <FontIcon className={styles.iconArrowBack} size={10} name={FontIconName.ArrowLeftBold} />
            Alerts
          </p>
          <button onClick={close} className={isMobile ? styles.none : styles.arrow_wrap}>
            <img src={arrowBack} alt='back' />
          </button>
        </div>



      <div className={ isMobile ? styles.none : styles.select}>
        <Button className={styles.addAlert} onClick={handleChange}>ADD NEW PRICE ALERT</Button>
        <Button className={styles.cancelAlert}>CANCEL ALL ALERTS</Button>
      </div>
      <div>

      </div>
      <div>
        <div className={styles.tableHead}>
          <div className={styles.symbol}>Symbol</div>
          <div className={styles.condition}>Condition</div>
          <div>Price</div>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.table}>
          <div className={styles.money}>EURUSD</div>
          <div className={styles.big}> ≥ </div>
          <div className={styles.second}>
            <div className={styles.num}>1.234</div>
            <div>  <FontIcon className={styles.icon} name={FontIconName.Close} size={12}/></div>
          </div>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.table}>
          <div className={styles.money}>BTCUSD</div>
          <div className={styles.big}> ≤ </div>
          <div className={styles.second}>
            <div className={styles.num}>7000.00</div>
            <div>  <FontIcon className={styles.icon} name={FontIconName.Close} size={12}/></div>
          </div>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.table}>
          <div className={styles.money}>ETHUSD</div>
          <div className={styles.big}> ≤ </div>
          <div className={styles.second}>
            <div className={styles.num}>1010.00</div>
            <div>  <FontIcon className={styles.icon} name={FontIconName.Close} size={12}/></div>
          </div>
        </div>
        <hr className={styles.hr}/>
        <Button className={styles.testAlert} onClick={testChange}>Test price alert </Button>
        <div className={ isMobile ? styles.select : styles.none}>
          <Button className={styles.addAlert} onClick={handleChange}>ADD NEW PRICE ALERT</Button>
          <Button className={styles.cancelAlert}>CANCEL ALL ALERTS</Button>
        </div>
        <CreatePriceAlert active={modalVisible} setActive={setModalVisible}/>
        <PriceAlert active={testAlert} setActive={setTestAlert} isMobile={isMobile}/>
      </div>
    </div>

  );
};

export default Alert;
