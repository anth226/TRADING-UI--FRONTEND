/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { HistoryItem } from './types';
import styles from './styles.module.scss';
import BTCicon from  '../../../../../libs/assets/images/coins/BTC.svg'
import ETHicon from  '../../../../../libs/assets/images/coins/ETH.svg'

export const columns = [
  {
    Header: 'Trader',
    accessor: 'trader',
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { trader } = row.original;
      return (
        <div className={styles.trader}>
          <FontIcon name={FontIconName.User} size={11} className={styles.profileIcon}/>
          {trader}
        </div>
      );
    },
  },
  {
    Header: 'Bet',
    accessor: 'bet',
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { bet } = row.original;
      return (
        <div className={styles.bet}>
          {bet ==='BTC' ? <img src={BTCicon} alt='coin'/> :  <img src={ETHicon} alt='coin'/> }{bet}
        </div>
      );
    },
  },
  {
    Header: 'Result',
    accessor: 'result',
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { result } = row.original;
      return (
        <div className={styles.bet}>
          {result ==='ETH' ? <img src={ETHicon} alt='coin'/> :  <img src={BTCicon} alt='coin'/> }{result}
        </div>
      );
    },
  },
  {
    Header: 'Payout',
    accessor: 'payout',
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { payout } = row.original;
      return (
        <div className={styles.wrong}>
          {payout}
        </div>
      );
    },
  },
  { Header: 'Level', accessor: 'level' },



];
