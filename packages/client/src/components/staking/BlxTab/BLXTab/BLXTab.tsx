/* eslint-disable */
import React, {FC} from 'react';
import balance_icon from "@option-blitz/libs/assets/images/balances/icons/balance.svg";
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from "./columns";
import {data} from './data'

const card = {
  title: 'blx balance',
  price: '500',
  currency: 'BLX',
  icon: balance_icon
}


const BLXTab:FC = () => {
  return (
    <div>
      <div>
        <Table columns={columns} data={data}/>
      </div>
    </div>
  );
};

export {BLXTab};
