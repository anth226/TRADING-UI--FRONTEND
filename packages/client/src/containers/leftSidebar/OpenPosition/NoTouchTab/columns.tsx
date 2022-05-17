/* eslint-disable */
import React from 'react';
import {TableCell as Cell} from "@option-blitz/libs/components/inputs/Table/types";
import {HistoryItem} from "../ClasicTab/types";
import Button from "@option-blitz/libs/components/inputs/Button";
import styles from "../ClasicTab/styles.module.scss";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import cx from "classnames";


export const columns = [
    { Header: 'Date/Time', accessor: 'dateTime' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Strike Price', accessor: 'strikePrice' },
    { Header: 'Knock-out price', accessor: 'knockOut' },
    {
        Header: 'Unrealized PNL (%ROI)',
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



