/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { HistoryItem } from './types';
import styles from './../styles.module.scss';


export const columns = [
    { Header: 'Date/Time', accessor: 'dateTime' },
    { Header: 'Selection', accessor: 'selection' },
    { Header: 'Expired', accessor: 'expired'},
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


