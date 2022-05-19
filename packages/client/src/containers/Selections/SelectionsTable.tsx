/* eslint-disable */
import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
// import { columns } from '../../components/balances/BlxTab/columns';
// import { data } from '../../components/balances/BlxTab/data';
import {columns} from "../../components/profile/TouchTab/columns";
import {data} from "../../components/profile/TouchTab/data";



const SelectionsTable: FC = () => (
  <div className="table">
    <Table  columns={ columns } data={data} />
  </div>
);

export { SelectionsTable };
