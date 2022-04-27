/* eslint-disable */
import React from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import lockGreen from '../ModalIcons/lockGreen.svg';
import exchange from '../ModalIcons/exchange.svg'
interface Props {
  active?: boolean
  setActive?: any
}


const WalletConnected = ({active, setActive}:Props) => {

  const handleChange = () => {
    setActive(false);
  };

  return (
    <div className={active ? styles.background : styles.modalInviseble}>
      <div className={styles.modal}>
        <div className={styles.login}>
          <div className={styles.lock}>
            <div><img src={lockGreen} /></div>
            <div>WALLET CONNECTED</div>
          </div>
          <button type='button' onClick={handleChange}>
            <FontIcon name={FontIconName.Close} size={15} />
          </button>
        </div>
        <div className={styles.main}>
          <div className={styles.circle}>
            <img src={exchange} alt='' className={styles.img} />
          </div>
          <div className={styles.fonts}>
            <Button className={styles.button}>DEPOSIT</Button>
          </div>
          <div className={styles.close} onClick={handleChange}>CLOSE</div>

        </div>
      </div>
    </div>

  );
};
export { WalletConnected };
