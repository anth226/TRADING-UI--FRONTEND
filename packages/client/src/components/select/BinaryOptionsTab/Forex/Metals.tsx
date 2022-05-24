import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import styles from './styles.module.scss';
import { columns } from './columns';
import { metals } from './metals';

const Metals: FC = () => (

  <div className={styles.mar}>
    <Table columns={columns} data={metals} />
  </div>

);
export { Metals };
