/* eslint-disable */
import React, {FC} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from "./columns";
import {data} from './data'
import styles from './styles.module.scss'



const StakingTab:FC = () => {
  return (
    <div className={styles.table}>
      <Table columns={columns} data={data}/>
    </div>
  );
};

export {StakingTab};
