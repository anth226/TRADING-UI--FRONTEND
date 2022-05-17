/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { HistoryItem } from './types';
import styles from './../styles.module.scss';
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";

export const columns = [
    { Header: 'Date/Time', accessor: 'dateTime' },
    { Header: 'Market', accessor: 'market' },
    { Header: 'Expired', accessor: 'expired', },
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
    { Header: 'Trade Amount', accessor: 'tradeAmount'},
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
    { Header: 'T x ID', accessor: 'txID'}
];



