/* eslint-disable */
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';

import { DefaultSelect, OptionItem } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { OnChangeValue } from 'react-select';
import { timeOptionsMock } from '@option-blitz/libs/mock/rightSidebar/timeSelectOption';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
interface Props {
  active?: boolean
  setActive?: any
  onChange?: (e: OnChangeValue<OptionItem, false>) => void
  className?: string
}


const CreatePriceAlert = ({active, setActive, onChange }:Props) => {

  const close = () => {
    setActive(false);
  };
  // const newModal = () => {
  //   setActive(false);
  //   setCreateaccount(true);
  // };

 const options = [
   { value: 'EURUSD'},
   { value: 'USDUSD'},
   { value: 'UAHUSD'},
   { value: 'DIRUSD'},
 ]

    return (
    <div className={active ? styles.background : styles.modalInviseble}>
      <div className={styles.modal}>
        <div className={styles.alert}>
          <div className={styles.pointer}>
            <div>CREATE PRICE ALERT</div>
          </div>
          <button type='button' onClick={close}>
            <FontIcon name={FontIconName.Close} size={15} />
          </button>
        </div>
        <div className={styles.main}>
          <DefaultSelect
            onChange={onChange}
            className={styles.select}
            type={'normal'}
            title="SELECT SYMBOL"
            options={options}
            defaultValue={options[0]}
          />
          <div className={styles.price}>Current price</div>
          <div className={styles.notify}>Notify me when price is:
            <Button className={styles.higher}>HIGHER</Button>
            <Button className={styles.lower} color={'transparent_primary'}>LOWER</Button>
          </div>

          <div className={styles.equal}>or equal to</div>
          <div className={styles.popUp}><Checkbox size={16} checked={true} onCheck={() => {}} >SHOW POP-UP</Checkbox></div>
          <div className={styles.telegram}><Checkbox size={16} checked={true} onCheck={() => {}} > NOTIFY TELEGRAM</Checkbox></div>
          <div className={styles.input}>
            <TextInput
              type={'text'}
              label={undefined}
              placeholder={'COMMENT'}
              className={styles.textArea}
            />
          </div>

          <Button className={styles.createAlert}>CREATE ALERT</Button>
        </div>
      </div>
    </div>

  );
};
export { CreatePriceAlert };
