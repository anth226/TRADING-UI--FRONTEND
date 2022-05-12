import React, {FC} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'

const History:FC = () => {
    return (
        <div>
            <h4 className={styles.title}>History</h4>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default History;
