/* eslint-disable */
import React, { FC } from 'react';
import Table from '@option-blitz/libs/components/inputs/Table';
import styles from './styles.module.scss';
import { columns } from './columns';
import { data } from './data';
import {columnsmob} from "./columnsmob";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
interface Props {
    onBack?: () => void;
    isMobile?: boolean;
}
const Forex: FC<Props> = ({isMobile}) => (
    <div className={styles.mar}>

    {isMobile && (
        <div className={styles.row}>
            <button >
                <FontIcon name={FontIconName.ArrowLeftBold} size={17} />
            </button>
            <div> Forex</div>
        </div>
    )}

    <Table
        classNameTH={isMobile ? styles.titlemob : styles.none}
        className={styles.tabuletTitle}
        columns={isMobile ? columnsmob : columns}
        data={data} />
  </div>

);
export { Forex };
