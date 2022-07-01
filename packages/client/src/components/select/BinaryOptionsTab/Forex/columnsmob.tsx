/* eslint-disable */
import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { Forex } from './types';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import styles from './styles.module.scss';

export const columnsmob = [
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
                        <p className={styles.colorGreenMob}>{valute}</p>
                        {course}
                    </div>
                </div>
            );
        },
    },
    {
        Header: 'Profit',
        accessor: 'profit1',
        Cell: ({ row }: Cell<Forex>) => {
            const {profit1, profit2 } = row.original;
            return (
                <div className={styles.colorGreenMob}>
                    {profit1} - {profit2}
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
                    <div className={styles.colorGreenMob}>
                        10 Online
                    </div>
                    <img src={sentiment} alt='' />
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
