/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { HistoryItem } from './types';
import styles from './styles.module.scss';
import Button from "@option-blitz/libs/components/inputs/Button";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";

export const columns = [
    { Header: 'Date/Time', accessor: 'dateTime' },
    { Header: 'Investment', accessor: 'investment' },
    { Header: 'Type Of Expiry', accessor: 'typeOfExpiry' },
    { Header: 'Strike Price', accessor: 'strikePrice' },
    { Header: 'Break Even Price', accessor: 'breakEvenPrice' },
    { Header: 'Current Price', accessor: 'currentPrice' },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { status } = row.original;
            return (
                <div className={cx({
                    [styles.success]: status === 'ITM',
                    [styles.wrong]: status === 'OTM',
                })}
                >
                    {status}
                </div>
            );
        },
    },
    {
        Header: 'Unrealized PNL',
        accessor: 'unrealizedPNL',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { unrealizedPNL } = row.original;
            return (
                <div className={cx({
                    [styles.success]: unrealizedPNL[0] === '+',
                    [styles.wrong]: unrealizedPNL[0] === '-',
                })}
                >
                    {unrealizedPNL}
                </div>
            );
        },

    },
    {
        Header: '',
        accessor: 'btn',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { btn } = row.original;
            return (
                <Button className={styles.view} size={5} color={"transparent_primary"}               >
                    <div>View</div>
                    <FontIcon size={6} name={FontIconName.ArrowRightBold} className={styles.icon}/>
                </Button>
            );
        },
    },
];


