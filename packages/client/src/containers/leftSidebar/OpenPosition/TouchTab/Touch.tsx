/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'
import {RightSidebarPosInfo} from "../../../../components/rightSidebar/RightSidebarPosInfo";
import Button from "@option-blitz/libs/components/inputs/Button";
import {useTouchSidebarHandlers} from "../../../../hooks/rightSidebar/useTouchSidebarHandlers";

interface Props {
    isMobile?: boolean;
}

const Touch:FC<Props> = ({
    isMobile}) => {
    const {
        positions: {
            positionItems,
            date,
            viewClick,
        },
    } = useTouchSidebarHandlers();

    return (
        <div>
            {!isMobile && (
                <div>
                    <h4 className={styles.title}>EUR/USD</h4>
                    <Table
                        columns={columns}
                        data={data}
                    />
                </div>
            )}

            {isMobile && (
                <div className={styles.card_body}>
                    <RightSidebarPosInfo items={positionItems} date={date} title="BTCUSD" />
                    <Button
                        onClick={viewClick}
                        className={styles.position_button}
                    >
                        View
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Touch;
