/* eslint-disable */
import React from 'react';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import pointer from '../ModalIcons/pointer.svg';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';

interface Props {
  active?: boolean;
  setActive?: any;
  mainmodal?: any;
}

const LoginPrivatKey = ({ active, setActive, mainmodal, }: Props) => {

  const handleChange = () => {
    setActive(false);
  };
  const back = () => {
    setActive(false);
    mainmodal(true);
  };

  return (
    <div className={active ? styles.background : styles.modalInviseble}>
      <div className={styles.modal}>
        <div className={styles.login}>
          <div className={styles.pointer}>
            <div><img src={pointer} /></div>
            <div>LOGIN WITH PRIVAT KEY</div>
          </div>
          <button type='button' onClick={handleChange}>
            <FontIcon name={FontIconName.Close} size={15} />
          </button>
        </div>
        <div className={styles.main}>
          <div className={styles.fonts}>
            <TextInput
              type={'text'}
              label={undefined}
              placeholder={'PRIVATE KEY'}
              className={styles.input}

            />
            <Button className={styles.button}>SUBMIT</Button>
          </div>
          <div className={styles.back} onClick={back}>BACK</div>

        </div>
      </div>
    </div>

  );
};
export { LoginPrivatKey };
