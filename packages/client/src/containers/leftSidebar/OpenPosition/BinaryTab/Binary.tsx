/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'
import btc from '@option-blitz/libs/assets/images/coins/BTC.svg';

const Binary:FC = () => {

    return (
        <div>
          <div className={styles.bt}>BTC/USD
            <img src={btc} alt='' />
          </div>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default Binary;
