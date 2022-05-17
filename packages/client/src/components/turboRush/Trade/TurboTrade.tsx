/* eslint-disable */
import React, { useMemo } from 'react';
import styles from './styles.module.scss'
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { DefaultSelect, OptionItem } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { timeOptionsMock } from '@option-blitz/libs/mock/rightSidebar/timeSelectOption';
import Button from '@option-blitz/libs/components/inputs/Button';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import BTC from '../../../../../libs/assets/images/coins/BTC.svg'
import ETH from '../../../../../libs/assets/images/coins/ETH.svg'
import Oil from '../../../../../libs/assets/images/coins/Natgas-USD.svg'
import Gold from '../../../../../libs/assets/images/coins/gold.svg'
import Silver from '../../../../../libs/assets/images/coins/silver.svg'

const TurboTrade = () => {

  const options = useMemo<OptionItem[]>(() => (
    timeOptionsMock.map((i) => ({ label: i.value, value: i.value }))
  ), []);
const data = [
  {
  img:BTC,
  title:'BTC',
  num:'5/1',
  select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
 },
  {
    img:ETH,
    title:'ETH',
    num:'5/1',
    select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
  },
  {
    img:Oil,
    title:'WTI',
    num:'5/1',
    select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
  },
  {
    img:Silver,
    title:'XAG',
    num:'5/1',
    select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
  },
  {
    img:Gold,
    title:'XAU',
    num:'5/1',
    select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
  },

]
  const inputValue = '0.00'
  return (
    <div className={styles.main}>
      {data.map(item=>(
        <div className={styles.container}>
          <div className={styles.title}><img src={item.img} alt='coin'  className={styles.coin}/>{item.title}</div>
          <div className={styles.number}>{item.num}</div>
          <div className={styles.select}> {item.select}</div>
        </div>
      ))}
      <RightSidebarInput
        className={styles.input}
        label="Trade amount"
        symbol="$"
        value={inputValue}
        onFirstBtnClick={()=>{}}
        onSecondBtnClick={()=>{}}
        onChange={()=>{}}
        firstBtnIcon={FontIconName.Minus}
        secondBtnIcon={FontIconName.Plus}
      />
      <DefaultSelect
        // onChange={onChange}
        // className={className}
        // type={type}
        title="Expiry"
        options={options}
        defaultValue={options[0]}
      />
      <div className={styles.returns}>RETURNS</div>
      <div className={styles.foot}>
        <div className={styles.persent}>+75%</div>
        <div className={styles.sum}>+0.00</div>
      </div>
      <Button color="primary" className={styles.button}>
        PLACE BET
      </Button>
    </div>
  );
};

export default TurboTrade;
