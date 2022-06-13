/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'
import Button from "@option-blitz/libs/components/inputs/Button";
import {FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {TargetPriceInput} from "../TargetPriceInput";
import btc from '@option-blitz/libs/assets/images/coins/BTC.svg';
import {ClassicPositions} from "../../../rightSidebar/RightSidebarClassic/ClassicPositions";

interface Props {
    isMobile?: boolean;
}

const NoTouch: FC<Props> = ({isMobile}) => {

    const [price, setPrice]=useState(6500000)
    const [roi, setRoi]=useState(10)


    function upPrice() {
        setPrice(price+1)
    }
    function downPrice() {
        setPrice(price-1)
    }
    function changePrice(e: { target: { value: any; }; }) {
        setPrice(e.target.value)
    }

    function upRoi() {
        setRoi(roi+1)
    }
    function downRoi() {
        setRoi(roi-1)
    }
    function changeRoi(e: { target: { value: any; }; }) {
        setRoi(e.target.value)
    }

    return (
        <div>
            {!isMobile && (
            <div className={styles.btc}>BTC/USD
                <img src={btc} alt='' />
            </div>
            )}
            {!isMobile && (
                <Table
                    columns={columns}
                    data={data}
                />
            )}
            {isMobile && (
                <div className={styles.card_body}>
                    <ClassicPositions/>
                </div>
            )}
            {!isMobile && (
                <div>
                    <h4 className={styles.title}>TAKE PROFIT</h4>
                    <div className={styles.buttons}>
                        <TargetPriceInput
                            label="Target price"
                            symbol="$"
                            onFirstBtnClick={upPrice}
                            onSecondBtnClick={downPrice}
                            onChange={changePrice}
                            value={price}
                            firstBtnIcon={FontIconName.ArrowRight}
                            secondBtnIcon={FontIconName.ArrowRight}
                            firstIconClassName={styles.up_icon}
                            secondIconClassName={styles.down_icon}
                        />
                        <TargetPriceInput
                            label="Target ROI"
                            symbol="$"
                            onFirstBtnClick={upRoi}
                            onSecondBtnClick={downRoi}
                            onChange={changeRoi}
                            value={roi}
                            firstBtnIcon={FontIconName.ArrowRight}
                            secondBtnIcon={FontIconName.ArrowRight}
                            firstIconClassName={styles.up_icon}
                            secondIconClassName={styles.down_icon}
                        />
                        <Button className={styles.button} color={"transparent_primary"}>- TARGET PRICE</Button>
                        <Button className={styles.button} color={"transparent_primary"}>SELL</Button>
                        <Button className={styles.button}>SETTLE</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoTouch;
