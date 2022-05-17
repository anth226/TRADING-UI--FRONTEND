/* eslint-sidable */
import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import { columns } from './columns';
import { data } from './data';
import styles from './styles.module.scss';

const GameHistoryTab:FC = () => (
  <div className={styles.container}>
    <h4 className={styles.title}>Game History</h4>
    <Table
      columns={columns}
      data={data}
    />
  </div>
);

export default GameHistoryTab;
