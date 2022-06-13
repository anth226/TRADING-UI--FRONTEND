/* eslint-disable */
import React, {FC} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'
import btc from '@option-blitz/libs/assets/images/coins/BTC.svg';
import {RightSidebarPosInfo} from "../../../../components/rightSidebar/RightSidebarPosInfo";
import Button from "@option-blitz/libs/components/inputs/Button";
import {useBinarySidebarHandlers} from "../../../../hooks/rightSidebar/useBinarySidebarHandlers";
interface Props {
    isMobile?: boolean;
}

const Binary:FC<Props> = ({isMobile}) => {
    const {
        position: {
            positionItems,
            date,
        },
    } = useBinarySidebarHandlers();
    return (
        <div>
            {!isMobile && (
                <div>
                <div className={styles.bt}>BTC/USD
                    <img src={btc} alt='' />
                </div>
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
                        className={styles.position_button}
                    >
                        View
                    </Button>
                </div>
            )}

        </div>
    );
};

export default Binary;
