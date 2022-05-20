import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import { columns } from './columns';
import { data } from './data';

const Forex: FC = () => (
  <div>
    <Table columns={columns} data={data} />
  </div>
);
export { Forex };
