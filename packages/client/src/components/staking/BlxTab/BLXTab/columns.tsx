/* eslint-disable*/
import React, { FC } from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import Button from '@option-blitz/libs/components/inputs/Button';
import { StatisticItem } from './types';
import styles from './styles.module.scss';
import { HistoryItem } from '../../../../containers/leftSidebar/OpenPosition/ClasicTab/types';
import rog from '../../../../../../libs/assets/images/staking/blx/rog.svg';
import usd from '../../../../../../libs/assets/images/coins/USD.svg';
import blx from '../../../../../../libs/assets/images/staking/blx/blx.svg';
import exchange from '../../../../../../libs/assets/images/staking/blx/exchange.svg';
import useResize from '@option-blitz/libs/hooks/useResize';




export const columns = () => {

const { isMobile } = useResize();

 return  [
  {
    Header: 'Coin',
    accessor: 'coin',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { coin } = row.original;
      return (
        <div className={styles.text_row}>
          <img src={blx} alt="icon" style={{ marginRight: 5 }} />
          <img src={exchange} alt="icon" style={{ marginRight: 5 }} />
          <img src={usd} alt="icon" style={{ marginRight: 5 }} />
          {coin}
        </div>
      );
    },
  },
  {
    Header: 'Platform',
    accessor: 'platform',
    Cell: ({ row }: Cell<StatisticItem>) => {
      const { platform } = row.original;
      return (
        <div className={isMobile ? styles.text_mobile : styles.text}>
          <img src={rog} alt="icon" style={{ marginRight: 5 }} />
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
        <div className={isMobile ? styles.total_mobile : styles.total}>
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
        <div className={isMobile ? styles.price_mobile : styles.price}>
          {price}
        </div>
      );
    },
  },
  {
    Header: '',
    accessor: 'btn',
    // eslint-disable-next-LpPoolBalance no-empty-pattern
    Cell: ({row}: Cell<HistoryItem>) => (
      <Button className={isMobile ? styles.btn_mobile : styles.btn} size={5} color="primary">
        <div>BUY</div>
      </Button>
    ),
  },

];
}
