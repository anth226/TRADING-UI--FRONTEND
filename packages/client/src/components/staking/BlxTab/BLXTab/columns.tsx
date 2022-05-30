import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import Button from '@option-blitz/libs/components/inputs/Button';
import { StatisticItem } from './types';
import styles from './styles.module.scss';
import { HistoryItem } from '../../../../containers/leftSidebar/OpenPosition/ClasicTab/types';

export const columns = [
  {
    Header: 'Coin',
    accessor: 'coin',
  },
  {
    Header: 'Platform',
    accessor: 'platform',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { platform } = row.original;
      return (
        <div className={styles.text}>
          {platform}
        </div>
      );
    },
  },
  {
    Header: 'Total liquidity',
    accessor: 'total',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { total } = row.original;
      return (
        <div className={styles.text}>
          {total}
        </div>
      );
    },
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { price } = row.original;
      return (
        <div className={styles.text}>
          {price}
        </div>
      );
    },
  },
  {
    Header: '',
    accessor: 'btn',
    // eslint-disable-next-line no-empty-pattern
    Cell: ({}: Cell<HistoryItem>) => (
      <Button className={styles.btn} size={5} color="primary">
        <div>BUY</div>
      </Button>
    ),
  },

];
