import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import { columns } from './columns';
import { data } from './data';
import styles from './styles.module.scss';

const History:FC = () => (
  <div>
    <h4 className={styles.title}>History</h4>
    <div className={styles.scroll}>
      <Table
        columns={columns}
        data={data}
      />
    </div>
    
  </div>
);

export default History;
