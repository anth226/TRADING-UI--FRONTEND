/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { HistoryItem } from './types';
import styles from './styles.module.scss';

export const columns = [
    { Header: 'Date/Time', accessor: 'dateTime' },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Method', accessor: 'method' },
    { Header: 'Type', accessor: 'type' },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row }: Cell<HistoryItem>) => {
            const { status } = row.original;
            return (
                <div className={cx({
                    [styles.success]: status === 'Completed',
                    [styles.wrong]: status === 'Wrong',
                    [styles.pending]: status === 'Pending'
                })}
                >
                    {status}
                </div>
            );
        },
    }
];
