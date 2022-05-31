/* eslint-disable */
import React from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import pointer from '../ModalIcons/pointer.svg'
import fox from '../ModalIcons/fox.svg'
import lock from '../ModalIcons/lock.svg'
import googl from '../ModalIcons/googl.svg'
import facebook from '../ModalIcons/facebook.svg'
import twit from '../ModalIcons/twit.svg'

interface Props {
  active?: boolean
  setActive?: any
  setKey?:any
  setCreateaccount?:any
  isMobile?: boolean
}


const LoginModal = ({active, setActive, setKey, setCreateaccount , isMobile, }:Props) => {


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

          <div className={!isMobile ?  styles.modal : styles.modalmob}>

            <div className={styles.login}>
              <div className={styles.pointer}>
                <div><img src={pointer} alt='' /></div>
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
              {isMobile && (
                  <div className={styles.method_mod}>OR</div>
              )}

              {isMobile && (
                  <div className={styles.mob}>

                    <Button color={'transparent_primary'} className={styles.button_small} size={27}
                            onClick={privatKeyModal}>
                      <img src={googl} alt='img' />
                    </Button>

                    <Button color={'transparent_primary'} className={styles.button_small} size={27}
                            onClick={privatKeyModal}>
                      <img src={facebook} alt='img' />
                    </Button>

                    <Button color={'transparent_primary'} className={styles.button_small} size={27}
                            onClick={privatKeyModal}>
                      <img src={twit} alt='img' />
                    </Button>
                  </div>
                  )}
              <div className={styles.pointer}>REGISTER</div>
              <hr className={styles.hr} />
              <div className={styles.account}>DON'T HAVE AN ACCOUNT?</div>
              <Button className={styles.button} onClick={newModal}> CREATE NEW WALLET</Button>
            </div>
          </div>
    </div>

  );
};
export { LoginModal };
