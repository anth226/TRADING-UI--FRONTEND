import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import styles from './styles.module.scss';
import { columns } from './columns';
import { crypto } from './crypto';

const Forex: FC = () => (
  <div className={styles.mar}>
    <Table columns={columns} data={crypto} />
  </div>
);
export { Forex };
