/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'

const TurboRush:FC = () => {

    return (
        <div>
            <h4 className={styles.title}>ETH</h4>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default TurboRush;
