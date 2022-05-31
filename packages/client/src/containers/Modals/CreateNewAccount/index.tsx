/* eslint-disable */
import React from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import profile from '../ModalIcons/profile.svg';
import copy from '../ModalIcons/copy.svg'
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';

interface Props {
  active?: boolean
  setActive?: any
  setWallet?: any
  isMobile?: boolean
}


const CreateNewAccount = ({active, setActive, setWallet, isMobile,}:Props) => {

  const handleChange = () => {
    setActive(false);
  };

  const wallet = () => {
    setActive(false);
    setWallet(true);
  };

  return (
    <div className={active ? styles.background : styles.modalInviseble}>
      <div className={isMobile ? styles.modal_mob : styles.modal}>
        <div className={styles.login}>
          <div className={styles.pointer}>
            <div><img src={profile} alt='' /></div>
            <div>CREATE NEW ACCOUNT</div>
          </div>
          <button type='button' onClick={handleChange}>
            <FontIcon name={FontIconName.Close} size={15} />
          </button>
        </div>
        <div className={styles.main}>
          <div className={styles.blockFirst}>
            <div className={isMobile ? styles.title_mob : styles.title}>
              Your new Ethereum wallet was generated. Save your private key in safe place.
              <div className={isMobile ? styles.description_mob : styles.description}>
                The wallet was generated in your browser. You are the only one having access to the
                private key.
              </div>
            </div>
            <div className={styles.qr}>QR</div>
          </div>
          <div className={styles.wallet}>WALLER ADDRESS</div>

          <div className={styles.address}>36HSSbUoPUCVwdJ6XqjPEYARM8qRheFo5z
            <div><img src={copy} alt='' className={styles.img} /></div>
          </div>

          <div className={styles.privatKey}>PRIVAT KEY
            <div className={styles.showKey}>SHOW KEY</div>
          </div>

          <div className={styles.key}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            <div><img src={copy} alt='' className={styles.imgsecond} /></div>
          </div>


          <div className={styles.footerBlock}>
            <Checkbox size={16} checked={false} onCheck={() => {
            }} className={styles.checkbox}></Checkbox>
            <div className={styles.footerDescription}>
              I understand that Optionblitz has no access to my private key and in case of loss I
              will not be able to restore access to my wallet and the funds on the smart contracts.
            </div>
          </div>

          <Button className={styles.button} onClick={wallet}>NEXT</Button>
        </div>
      </div>
    </div>

  );
};
export { CreateNewAccount };
