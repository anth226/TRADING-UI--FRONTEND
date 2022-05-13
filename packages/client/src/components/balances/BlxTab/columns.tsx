import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { StatisticItem } from './types';
import styles from './styles.module.scss';

export const columns = [
  {
    Header: 'Level',
    accessor: 'level',
  },
  {
    Header: '30d Trade Volume (USDС)',
    accessor: 'volume',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { volume } = row.original;
      return (
        <div className={styles.text}>
          {volume}
        </div>
      );
    },
  },
  {
    Header: '&or',
    accessor: 'or',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { or } = row.original;
      return (
        <div className={styles.text}>
          {or}
        </div>
      );
    },
  },
  {
    Header: 'BLX balance',
    accessor: 'blxBalance',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { blxBalance } = row.original;
      return (
        <div className={styles.text}>
          {blxBalance}
        </div>
      );
    },
  },
  {
    Header: 'Transaction fee',
    accessor: 'fee',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { fee } = row.original;
      return (
        <div className={styles.text}>
          {fee}
        </div>
      );
    },
  },
  {
    Header: 'Transaction fee paid with BLX',
    accessor: 'feeBlx',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { feeBlx } = row.original;
      return (
        <div className={styles.text}>
          {feeBlx}
        </div>
      );
    },
  },
];
