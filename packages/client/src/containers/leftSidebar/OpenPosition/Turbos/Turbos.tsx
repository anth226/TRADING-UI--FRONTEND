/* eslint-disable */
import React, {FC, useState} from 'react';
import Table from "@option-blitz/libs/components/inputs/Table";
import {columns} from './columns'
import {data} from './data'
import styles from './styles.module.scss'
import Button from "@option-blitz/libs/components/inputs/Button";
import {FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {TargetPriceInput} from "../TargetPriceInput";
import btc from '../../../../../../libs/assets/images/coins/BTC.svg'
import {none} from "ramda";
import cx from 'classnames';
import {RightSidebarPosInfo} from "../../../../components/rightSidebar/RightSidebarPosInfo";
import {Collapse} from "@option-blitz/libs/components/common/Collapse";
import {RightSidebarInput} from "@option-blitz/libs/components/rightSidebar/RightSidebarInput";
import {PositionItem} from "../../../../hooks/rightSidebar/useTouchSidebarHandlers";
import {useClassicSidebarHandlers} from "../../../../hooks/rightSidebar/useClassicSidebarHandlers";

interface Props {
    isMobile?: boolean;
}

const Turbos: FC<Props> = ({isMobile}) => {

    const [price, setPrice] = useState(6500000)
    const [roi, setRoi] = useState(10)

    function upPrice() {
        setPrice(price + 1)
    }

    function downPrice() {
        setPrice(price - 1)
    }

    function changePrice(e: { target: { value: any; }; }) {
        setPrice(e.target.value)
    }

    function upRoi() {
        setRoi(roi + 1)
    }

    function downRoi() {
        setRoi(roi - 1)
    }

    function changeRoi(e: { target: { value: any; }; }) {
        setRoi(e.target.value)
    }

    const type = 'small';
    const abra: PositionItem[] = [
        { label: 'Size', value: '1.0 BTC' },
        { label: 'Strike price', value: '$60.000.00' },
        { label: 'Knock-out price', value: '$54.000.00' },
        { label: 'Unrealized PNL (%ROI)', value: '-$200(-3.00%)' },
    ];

    const {
        positions: {
            date,
            sellClick,
            settleClick,
            targetPriceClick,
        },
    } = useClassicSidebarHandlers();

    return (
        <div className={isMobile ? styles.card : none}>

            {!isMobile && (
                <div className={styles.title}>BTC/USD
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
                    <div className={styles.positions}>
                        <RightSidebarPosInfo type={type} title="BTCUSD" items={abra} date={date} />
                        <div className={styles.aps}>
                            <Collapse
                                title='take profit'
                                className={styles.collapse_position}
                                contentClassName={styles.container_profit}
                            >
                                <div className={styles.row_input}>
                                    <RightSidebarInput
                                        type={type}
                                        className={styles.input}
                                        label="Target price"
                                        symbol="$"
                                        onFirstBtnClick={upPrice}
                                        onSecondBtnClick={downPrice}
                                        onChange={changePrice}
                                        // value={price}
                                        firstBtnIcon={FontIconName.ArrowRight}
                                        secondBtnIcon={FontIconName.ArrowRight}
                                        firstIconClassName={styles.up_icon}
                                        secondIconClassName={styles.down_icon}
                                    />
                                    <RightSidebarInput
                                        type={type}
                                        className={styles.input}
                                        label="Target ROI"
                                        symbol="%"
                                        onFirstBtnClick={upRoi}
                                        onSecondBtnClick={downRoi}
                                        onChange={changeRoi}
                                        // value={roi}
                                        firstBtnIcon={FontIconName.ArrowRight}
                                        secondBtnIcon={FontIconName.ArrowRight}
                                        firstIconClassName={styles.up_icon}
                                        secondIconClassName={styles.down_icon}
                                    />

                                </div>
                                <div className={styles.buttons_wrap}>
                                    <Button
                                        onClick={targetPriceClick}
                                        color="transparent_primary"
                                        className={cx(styles.button, styles.target_price_btn, styles.buttons_turbos)}
                                    >
                                        - target price
                                    </Button>
                                    <Button
                                        onClick={sellClick}
                                        color="transparent_primary"
                                        className={cx(styles.button, styles.buttons_turbos)}
                                    >
                                        sell
                                    </Button>
                                    <Button
                                        onClick={sellClick}
                                        color="transparent_primary"
                                        className={cx(styles.button,  styles.buttons_turbos)}
                                    >
                                        view
                                    </Button>
                                    <Button
                                        onClick={settleClick}
                                        className={cx(styles.button, styles.buttons_turbos)}
                                        color="primary"
                                    >
                                        settle
                                    </Button>
                                </div>

                            </Collapse>
                        </div>

                    </div>
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

export default Turbos;
