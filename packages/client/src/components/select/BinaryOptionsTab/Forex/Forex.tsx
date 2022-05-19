import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import { columns } from './columns';
import { data } from './data';
import './styles_select.css';

const Forex: FC = () => (
  <div className="table">
    <Table columns={columns} data={data} />
  </div>
);
export { Forex };
