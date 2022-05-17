/* eslint-disable */
import React, {FC} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'

const Touch:FC = () => {

    return (
        <div>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default Touch;
