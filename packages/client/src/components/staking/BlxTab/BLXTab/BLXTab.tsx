/* eslint-disable */
import React, {FC} from 'react';
import balance_icon from "@option-blitz/libs/assets/images/balances/icons/balance.svg";
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from "./columns";
import {data} from './data'
import styles from './styles.module.scss'

const card = {
  title: 'blx balance',
  price: '500',
  currency: 'BLX',
  icon: balance_icon
}


const BLXTab:FC = () => {
  return (
    <div className={styles.table}>
        <Table columns={columns()} data={data} classNameTH={styles.th_blx}/>
    </div>
  );
};

export {BLXTab};
