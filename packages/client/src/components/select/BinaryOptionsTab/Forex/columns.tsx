/* eslint-disable */
import React from 'react';
import type { TableCell as Cell } from '@option-blitz/libs/components/inputs/Table/types';
import { Forex } from './types';
import './styles_select.css'
import violan from "./../../../../../../libs/assets/images/Turbo/volatility.png";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";

export const columns = [
    { Header: 'Assets', accessor: 'assets',
        Cell: ({ row }: Cell<Forex>) => {
            const { icon, valute, course } = row.original;
            return (
                <div className="row">
                    <img src={icon} alt=''/>
                    <div className="col">
                        <p className="success">{valute}</p>
                        {course}
                    </div>
                </div>
            );
        },
    },
    { Header: 'Profit < 1 min', accessor: 'profit1' },
    { Header: '1+ min', accessor: 'profit2', },
    { Header: '5+ min', accessor: 'profit3', },
    { Header: '15+ min', accessor: 'profit4', },
    { Header: '30+ min', accessor: 'profit5', },
    { Header: '1 h', accessor: 'profit6', },
    {
        Header: 'Sentiment',
        accessor: 'sentiment',
        Cell: ({ row }: Cell<Forex>) => {
            const { sentiment } = row.original;
            return (
                <div>
                    10 Online
                    <img src={sentiment} alt=''/>
                </div>
            );
        },
    },
    { Header: 'Chart', accessor: 'chart',
        Cell: ({ row }: Cell<Forex>) => {
            const { chart } = row.original;
            return (
                <div className='fl ' >
                    <img src={violan} alt="chart" className="gra"  />
                </div>
            );
        },},
    { Header: 'Watchlist', accessor: 'watchlist',

        Cell: ({ row }: Cell<Forex>) => {
            const { sentiment } = row.original;
            return (
                <div>
                    <FontIcon name={FontIconName.Plus} size={17} />
                </div>
            );
        },
   },
];



