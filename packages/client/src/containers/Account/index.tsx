/* eslint-disable */
import React, { FC } from 'react';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import { DefaultSelect } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { FontIconName, FontIcon } from '@option-blitz/libs/components/inputs/FontIcon';
import imageTemp from './imageTemp.svg';
import styles from './styles.module.scss';
import pan from '../../../../libs/assets/images/pan.svg'
import { useWeb3React } from "@web3-react/core";
const elements = {
  nothing: undefined,
  text: 'text',
  icon: <FontIcon name={FontIconName.View} size={16} />,
};


const sortOptions = [
  { value: 'Most Traded' },
  { value: 'Biggest Rise' },
  { value: 'Biggest fall over last 24' },
];


interface Props {
  isMobile?: boolean
}

const Account: FC<Props> = ({ isMobile }) => {
  const {chainId, account} = useWeb3React<unknown>();

  return (
  <div className={ isMobile ? styles.wrapMobile : styles.wrap}>
    <p className={styles.title}>Blockchain account ID:</p>
    <p className={styles.address}>{account} - {chainId}</p>
    <div className={styles.container}>
      <div className={styles.col}>
        <img src={imageTemp} alt="img" />
        <p className={styles.online}>Online</p>
        <p className={styles.level}>Profile level 10</p>
        <div className={styles.containerItem}>
          <div className={styles.item}>
            <p className={styles.labelItem}>Last Login:</p>
            <p className={styles.valueItem}>12/11/21 17:15</p> 
          </div>
          <div className={styles.item}>
            <p className={styles.labelItem}>Current date:</p>
            <p className={styles.valueItem}>13/11/21 17:15</p> 
          </div>
        </div>
 
      </div>
      <div className={styles.colRight}>
        <TextInput
          className={styles.username}
          value="Kamix 85"
          onChange={() => {}}
          label='USERNAME'
          right={elements.icon}
        />
        <DefaultSelect
          type="small"
          title="Sort by"
          onChange={() => {}}
          options={sortOptions}
          defaultValue={sortOptions[0]}
        />
        <TextInput
          value="@Kamix 85"
          onChange={() => {}}
          label='TELEGRAM USERNAME'
          right={<img src={pan} alt='' />}
        />
        <TextInput
          value="max@gmail.com"
          onChange={() => {}}
          label='EMAIL'
          right={<img src={pan} alt='' />}
        />
        
      </div>
    </div>
  </div>)
};

export { Account };
