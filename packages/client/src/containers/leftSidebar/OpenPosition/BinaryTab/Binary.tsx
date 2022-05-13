/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'

const Binary:FC = () => {

    return (
        <div>
            <h4 className={styles.title}>BTC/USD</h4>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default Binary;
