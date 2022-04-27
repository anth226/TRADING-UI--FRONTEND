/* eslint-disable */
import React, { useState } from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { CloseIcon } from '@option-blitz/libs/components/common/CloseIcon';
import classNames from 'classnames';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import pointer from '../ModalIcons/pointer.svg'
import fox from '../ModalIcons/fox.svg'
import lock from '../ModalIcons/lock.svg'
import { WalletConnected } from '../WalletConnected';
interface Props {
  active?: boolean
  setActive?: any
  setKey?:any
  setCreateaccount?:any
}


const LoginModal = ({active, setActive, setKey, setCreateaccount }:Props) => {

  const handleChange = () => {
    setActive(false);
  };
  const newModal = () => {
    setActive(false);
    setCreateaccount(true);
  };
  const privatKeyModal = () => {
    setActive(false);
    setKey(true);
  };

  return (
    <div className={active ? styles.background : styles.modalInviseble}>
      <div className={styles.modal}>
        <div className={styles.login}>
          <div className={styles.pointer}>
            <div><img src={pointer} /></div>
            <div>LOGIN</div>
          </div>
          <button type='button' onClick={handleChange}>
            <FontIcon name={FontIconName.Close} size={15} />
          </button>
        </div>
        <div className={styles.main}>
          <div className={styles.method}>SELECT METHOD</div>
          <div className={styles.fonts}>
            <Button color={'transparent_primary'} className={styles.button} size={27}
                    onClick={privatKeyModal}>
              <img src={lock} alt='img' className={styles.imgLock} />
              <p>PRIVATE KEY</p>
            </Button>
            <Button color={'transparent_primary'} className={styles.button} size={27}>
              <img src={fox} alt='img' className={styles.imgFox} />
              <p>METAMASK</p>
            </Button>
          </div>
          <hr className={styles.hr} />
          <div className={styles.account}>DON'T HAVE AN ACCOUNT?</div>
          <Button className={styles.button} onClick={newModal}> CREATE NEW WALLET</Button>
        </div>
      </div>
    </div>

  );
};
export { LoginModal };
