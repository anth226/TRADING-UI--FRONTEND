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
    { Header: 'Profit/Loss', accessor: 'profitLoss' },
    {
        Header: '',
        accessor: 'btn',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { btn } = row.original;
            return (
                <Button className={styles.button} size={5} color={"transparent_primary"}               >
                    <div className={styles.view}>View</div>
                    <FontIcon size={7} name={FontIconName.ArrowRightBold} className={styles.icon}/>
                </Button>
            );
        },
    },
];



