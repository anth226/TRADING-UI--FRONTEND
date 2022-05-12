/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import Button from '@option-blitz/libs/components/inputs/Button';
import { DepositIcon } from '../../../components/balances/DepositIcon';
import { WithdrawIcon } from '../../../components/balances/WithdrawIcon';
import { HistoryIcon } from '../../../components/balances/HistoryIcon';
import lock from '../../Modals/ModalIcons/lock.svg';

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}

const buttons = [
  {
    name: 'CLASIC',
  },
  {
    name: 'BINARY',
  },
  {
    name: 'TURBO RUSH',
  },
  {
    name: 'RUSH',
  },
  {
    name: 'TOUCH',
  },
  {
    name: 'NO-TOUCH',
  }
]

const OpenPosition: FC<Props> = ({
                           onBack,
                           isMobile,
                         }) => {

  const [activeButton, setActiveButton] = useState(1)

  return (

    <div className={styles.wrap}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>OPEN POSITIONS</p>
        <button onClick={onBack} className={styles.arrow_wrap}>
          <img src={arrow} alt='back' />
        </button>
      </div>
      <div style={{display:'flex', columnGap: '12px'}}>
        {buttons.map((item, )=>(
          <Button color={'transparent_primary'} className={styles.button} size={5}>
          <p>{item.name}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};
export { OpenPosition };
