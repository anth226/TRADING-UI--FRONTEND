import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { HistoryItem } from './types';
import styles from './styles.module.scss';

export const columns = [
  { Header: 'Date/Time', accessor: 'dateTime' },
  { Header: 'Market', accessor: 'market' },
  { Header: 'Expired', accessor: 'expired' },
  { 
    Header: 'Type', 
    accessor: 'type',
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { type } = row.original;
      return (
        <div className={cx({
          [styles.success]: type === 'Call',
          [styles.wrong]: type === 'Put',
        })}
        >
          {type}
          <FontIcon size={12} name={type === 'Call' ? FontIconName.Up : FontIconName.Down} />
        </div>
      );
    }, 
  },
  { Header: 'Trade Amount', accessor: 'tradeAmount' },
  { 
    Header: 'Result', 
    accessor: 'result', 
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { result } = row.original;
      return (
        <div className={cx({
          [styles.success]: result === 'Win',
          [styles.wrong]: result === 'Lose',
        })}
        >
          {result}
        </div>
      );
    }, 
  },
  { 
    Header: 'Profit/Loss', 
    accessor: 'rofitLoss',
    Cell: ({ row }: Cell<HistoryItem>) => {
      const { rofitLoss, result } = row.original;
      return (
        <div className={cx({
          [styles.success]: result === 'Win',
          [styles.wrong]: result === 'Lose',
        })}
        >
          {rofitLoss}
        </div>
      );
    }, 
  },
  { Header: 'T x ID', accessor: 'txId' },
];
