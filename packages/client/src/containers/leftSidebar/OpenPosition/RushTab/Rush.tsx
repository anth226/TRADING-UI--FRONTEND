/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'
import eth from '@option-blitz/libs/assets/images/coins/ETH.svg';

const Rush:FC = () => {

    return (
        <div>
          <div className={styles.title}>ETH<img src={eth} alt='' /></div>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default Rush;
