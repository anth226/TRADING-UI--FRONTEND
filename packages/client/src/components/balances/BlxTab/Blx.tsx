/* eslint-disable */
import React, {FC} from 'react';
import styles from "./styles.module.scss";
import ChipCard from "../../../containers/Balances/ChipCard/ChipCard";
import balance_icon from "@option-blitz/libs/assets/images/balances/icons/balance.svg";
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from "./columns";
import {data} from './data'
import useResize from '@option-blitz/libs/hooks/useResize';

const card = {
    title: 'blx balance',
    price: '500',
    currency: 'BLX',
    icon: balance_icon
}

const Blx:FC = () => {
    const { isMobile } = useResize();
    return (
        <div>
            <div className={styles.cardBlock}>
                <ChipCard card={card}/>
            </div>
            <div className={ isMobile ? styles.infoBlockMobile : styles.infoBlock}>
                <h4 className={styles.blxTitle}>blx</h4>
                <div className={styles.feeLvl}>
                    <p className={styles.subtitle}>your trading fee level</p>
                    <span>1</span>
                </div>
                <div className={styles.lvlLine}>
                </div>
                <p className={styles.infoTitle}>Use BLX to boost staking rewards by up to 100%
                    and spend it to pay for transactions fees with up to 40% discount. Refer other
                    traders and earn an extra 10% of their fees when they pay in BLX.
                </p>
                <div className={styles.scroll}>
                    <Table columns={columns} data={data}/>
                </div>
            </div>
        </div>
    );
};

export {Blx};
