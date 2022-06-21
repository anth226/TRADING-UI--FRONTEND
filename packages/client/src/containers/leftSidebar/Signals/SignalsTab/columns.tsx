/* eslint-disable*/
import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { SignalsItem } from './types';
import styles from './styles.module.scss';
import line from '@option-blitz/libs/assets/images/SignalsMiniChart.svg';
import sent from '@option-blitz/libs/assets/images/sentiment.png';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import flag from '@option-blitz/libs/assets/images/countries/EUR-USD.svg';


export const columns = [
  {
    Header: 'Asset',
    accessor: 'asset',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { asset } = row.original;
      return (
        <div className={styles.asset}>
          <img src={flag} alt='icon' />
          <div>
            <div className={styles.euro}>EUR/USD</div>
            <div className={styles.price}>1.282815</div>
          </div>
        </div>
      );
    },
  },
  {
    Header: 'Chart',
    accessor: 'chart',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { chart } = row.original;
      return (
        <div className={styles.text}>
          <img src={line} alt='' />
        </div>
      );
    },
  },

  {
    Header: 'Sentiment',
    accessor: 'sentiment',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { sentiment } = row.original;
      return (
        <div className={styles.text}>
          <div className={styles.fl}>
            <div className={styles.point}></div>
            <div className={styles.ten}>10 Online</div>
          </div>
          <img src={sent} alt='' />
        </div>
      );
    },
  },
  {
    Header: 'Type',
    accessor: 'type',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { type } = row.original;
      return (
        <div className={styles.type}>
          <div> Moving Average:</div>
          <div>Indicators:</div>
          <div className={styles.summary}>Summary</div>
        </div>
      );
    },
  },
  {
    Header: '5 min',
    accessor: '5 min',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { FiveMin } = row.original;
      return (
        <div className={styles.five}>
          Strong Buy
          Strong Buy
          <div className={styles.green}>Strong Buy</div>
        </div>
      );
    },
  },
  {
    Header: '15 minutes',
    accessor: '15 min',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { fifteenMin } = row.original;
      return (
        <div className={styles.fiv}>
          Strong Buy
          Strong Buy
          <div className={styles.green}>Strong Buy:</div>
        </div>
      );
    },
  },
  {
    Header: 'Hourly',
    accessor: 'hourly',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { Hourly } = row.original;
      return (
        <div className={styles.hourly}>
          Neutral
          Strong Buy
          <div className={styles.green}>Buy</div>
        </div>
      );
    },
  },
  {
    Header: 'Daily',
    accessor: 'daily',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { daily } = row.original;
      return (
        <div className={styles.daily}>
          Sell
          Strong Sell
          <div className={styles.sell}>Strong Sell:</div>
        </div>
      );
    },
  },
  {
    Header: 'Watchlist',
    accessor: 'watchList',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { watchList } = row.original;
      return (
        <div className={styles.center}>
          <FontIcon name={FontIconName.Plus} size={17} />
        </div>
      );
    },
  },
  {
    Header: 'Trade Now',
    accessor: 'tradeNow',
    Cell: ({ row }: Cell<SignalsItem>) => {
      const { tradeNow } = row.original;
      return (
        <div className={styles.center}>
          <FontIcon name={FontIconName.ArrowRightBold} size={17} />
        </div>
      );
    },
  },

];
