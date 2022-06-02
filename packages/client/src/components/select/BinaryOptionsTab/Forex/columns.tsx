/* eslint-disable */
import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { Forex } from './types';
import graphic from './../../../../../../libs/assets/images/SelectionMiniChart.svg';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import styles from './styles.module.scss';

export const columns = [
  {
    Header: 'Assets',
    accessor: 'assets',
    Cell: ({ row }: Cell<Forex>) => {
      const {
        icon,
        valute,
        course,
      } = row.original;
      return (
        <div className={styles.row}>
          <img src={icon} alt='' className={styles.flags} />
          <div className={styles.col}>
            <p className={styles.colorGreen}>{valute}</p>
            {course}
          </div>
        </div>
      );
    },
  },

  {
    Header: 'Profit < 1 min',
    accessor: 'profit1',
    Cell: ({ row }: Cell<Forex>) => {
      const { profit2 } = row.original;
      return (
        <div className={styles.colorGreen}>
          {profit2}
        </div>
      );
    },
  },
  {
    Header: '1+ min',
    accessor: 'profit2',
    Cell: ({ row }: Cell<Forex>) => {
      const { profit2 } = row.original;
      return (
        <div className={styles.colorGreen}>
          {profit2}
        </div>
      );
    },
  },
  {
    Header: '5+ min',
    accessor: 'profit3',
    Cell: ({ row }: Cell<Forex>) => {
      const { profit2 } = row.original;
      return (
        <div className={styles.colorGreen}>
          {profit2}
        </div>
      );
    },
  },

  {
    Header: '15+ min',
    accessor: 'profit4',
    Cell: ({ row }: Cell<Forex>) => {
      const { profit2 } = row.original;
      return (
        <div className={styles.colorGreen}>
          {profit2}
        </div>
      );
    },
  },

  {
    Header: '30+ min',
    accessor: 'profit5',
    Cell: ({ row }: Cell<Forex>) => {
      const { profit2 } = row.original;
      return (
        <div className={styles.colorGreen}>
          {profit2}
        </div>
      );
    },
  },

  {
    Header: '1 h',
    accessor: 'profit6',
    Cell: ({ row }: Cell<Forex>) => {
      const { profit2 } = row.original;
      return (
        <div className={styles.colorGreen}>
          {profit2}
        </div>
      );
    },
  },

  {
    Header: 'Sentiment',
    accessor: 'sentiment',
    Cell: ({ row }: Cell<Forex>) => {
      const { sentiment } = row.original;
      return (
        <div>
          10 Online
          <img src={sentiment} alt='' />
        </div>
      );
    },
  },

  {
    Header: 'Chart',
    accessor: 'chart',
    Cell: ({ row }: Cell<Forex>) => {
      const { chart } = row.original;
      return (
        <div className={styles.fl}>
          <img src={graphic} alt='chart' className={styles.img} />
        </div>
      );
    },
  },
  {
    Header: 'Watchlist',
    accessor: 'watchlist',

    Cell: ({ row }: Cell<Forex>) => {
      const { sentiment } = row.original;
      return (
        <div className={styles.iconsal}>
          <FontIcon name={FontIconName.Plus} size={17} />
        </div>
      );
    },
  },
  {
    Header: 'Trade Now',
    accessor: 'tradeNow',
    Cell: ({ row }: Cell<Forex>) => {
      const {} = row.original;
      return (
        <div>
          <FontIcon name={FontIconName.ArrowRightBold} size={17} />
        </div>
      );
    },
  },
];



