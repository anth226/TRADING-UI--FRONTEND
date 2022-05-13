/* eslint-disable */
import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import { columns } from '../../components/balances/BlxTab/columns';
import { data } from '../../components/balances/BlxTab/data';
import styles from './styles.module.scss';

const SelectionsTable: FC = () => (
  <div className={styles.table}>
    <Table columns={columns} data={data} />
  </div>
);

export { SelectionsTable };
