/* eslint-disable */
import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import {columns} from "../../components/profile/TouchTab/columns";
import {metals} from "../../components/select/BinaryOptionsTab/Forex/metals";



const SelectionsTable: FC = () => (
  <div className="table">
    <Table  columns={ columns } data={metals} />
  </div>
);

export { SelectionsTable };
