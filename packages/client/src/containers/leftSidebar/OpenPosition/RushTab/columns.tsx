/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { HistoryItem } from './types';
import styles from './styles.module.scss';
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import Button from "@option-blitz/libs/components/inputs/Button";

export const columns = [
    { Header: 'Date/Time', accessor: 'dateTime' },
    { Header: 'Investment', accessor: 'investment' },
    // { Header: 'Direction', accessor: 'direction' },
    {
        Header: 'Direction',
        accessor: 'direction',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { direction } = row.original;
            return (
                <div className={cx({
                    [styles.success]: direction === 'UP',
                    [styles.wrong]: direction === 'DOWN',
                })}
                >
                    {direction}
                    <FontIcon size={12} name={direction === 'UP' ? FontIconName.Up : FontIconName.Down} />
                </div>
            );
        },
    },
    { Header: 'Type Of Expiry', accessor: 'typeOfExpiry' },
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
        Header: 'Profit/Loss',
        accessor: 'profitLoss',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { profitLoss } = row.original;
            return (
                <div className={cx({
                    [styles.success]: profitLoss[0] === '+',
                    [styles.wrong]: profitLoss[0] === '-',
                })}
                >
                    {profitLoss}
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


