/* eslint-disable */
import React, {FC} from "react";
import {useInputHandlers} from "../../../hooks/rightSidebar/useInputHandlers";
import {useCheckbox} from "../../../hooks/useCheckbox";
import {useCollapse} from "../../../hooks/useCollapse";
import {RightSidebarNavigation} from "@option-blitz/libs/components/rightSidebar/RightSidebarNavigation";
import styles from "./styles.module.scss";
import {Checkbox} from "@option-blitz/libs/components/inputs/Checkbox";
import {RightSidebarInput} from "@option-blitz/libs/components/rightSidebar/RightSidebarInput";
import {FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {RightSidebarTime} from "@option-blitz/libs/components/rightSidebar/RightSidebarTime";
import {RightSidebarReturns} from "@option-blitz/libs/components/rightSidebar/RightSidebarReturns";
import Button from "@option-blitz/libs/components/inputs/Button";
import {useClassicSidebarHandlers} from "../../../hooks/rightSidebar/useClassicSidebarHandlers";
import quest from './../../Modals/ModalIcons/question.svg'
import {Letter, letterIcons} from "../../../constants/letters/letters";
import cx from 'classnames';
import {Collapse} from "@option-blitz/libs/components/common/Collapse";
import ProjectTool from "../../../components/staking/graf/ProjectTool/ProjectTool";


interface Props {
    mainChart?: React.ReactNode
}

const RushMobile: FC<Props> = ({ mainChart }) => {
    const targerPrice = '199'
    const roi = '0'
    const data =[
        {
            label: 'BTCUSD',
            time:'20-12-26 17:15:45',
            size: 'Size',
            sizeValue: '1.01 BTC',
            strikePrice: 'Strike price',
            strikePriceValue: '$ 60.000.00',
            KnockOutPrice:'Knock-out price',
            KnockOutPriceValue:'$ 54.000.00',
            PNL:'Unrealized PNL (%ROI)',
            PNLValue:'-$200(-3.00%)',
        },
    ]
    const {
        trade: {
            activeButton,
            callClick,
            putClick,
        },
        positions: {
        },
    } = useClassicSidebarHandlers();

    const {
        firstBtnClick: minusClick,
        secondBtnClick: plusClick,
        value: amountValue,
        onChange: amountChange,
    } = useInputHandlers();

    const {
    } = useInputHandlers('437.1');


    const {
        checkbox: putCheckbox,
        onCheckboxChange: putCheckboxChange,
    } = useCheckbox(true);

    const {
        isActive: builderActive,
        onChange: onChangeBuilder,
    } = useCollapse();

    return (
        <RightSidebarNavigation isMobile>
            <div className={styles.chart_wrap}>
                {ProjectTool}
            </div>

            <div className={styles.trade}>
                {/*<div className={styles.chart_wrap}>*/}
                {/*    /!*{mainChart}*!/*/}
                {/*</div>*/}

                <div className={styles.trade_wrap}>
                    <div className={styles.title}>
                        MULTIPLE BET
                    </div>

                        <div className={styles.checkbox_wrap}>
                            <div className={styles.row_bet}>
                                <div className={styles.row}>
                                    <div className={styles.row_check}>
                                        <Checkbox
                                            size={16}
                                            iconSize={8}
                                            checked={putCheckbox}
                                            onCheck={putCheckboxChange}
                                            labelClassName={styles.checkbox_label}
                                            className={ styles.check_box_active }
                                        />
                                        <div className={styles.check_text} >
                                            DIRECTION
                                        </div>
                                    </div>
                                    <div className={styles.quest}>
                                        <img src={quest} alt=''/>
                                    </div>
                                </div>

                                <div className={styles.mult}>
                                    Multiplier
                                </div>

                            </div>


                            <div className={styles.row}>
                                <div className={styles.button_wrap}>
                                    <Button
                                        onClick={callClick}
                                        className={styles.button_radio}
                                        color={activeButton === 'call' ? 'primary' : 'transparent_primary'}
                                    >
                                        <p>UP</p>
                                    </Button>
                                    <Button
                                        onClick={putClick}
                                        className={styles.button_radio}
                                        color={activeButton === 'put' ? 'secondary' : 'transparent_secondary'}
                                    >
                                        <p>DOWN</p>
                                    </Button>
                                </div>
                                <div className={styles.multval}>
                                    x 1.0
                                </div>
                            </div>

                        </div>

                    <div className={styles.input_wrap}>
                        <RightSidebarTime type="normal" className={styles.time} />
                        <RightSidebarInput
                            type="small"
                            value={amountValue}
                            className={styles.trade_amount}
                            label="Bet amount"
                            onFirstBtnClick={plusClick}
                            onSecondBtnClick={minusClick}
                            onChange={amountChange}
                            firstBtnIcon={FontIconName.Minus}
                            secondBtnIcon={FontIconName.Plus}
                        />
                    </div>
                    <RightSidebarReturns className={styles.returns} type="small" percents="75" balance="0.00" />
                    <Button className={styles.position_button} color="primary">
                        PLACE BET
                    </Button>
                </div>
            </div>

            <div className={styles.positions_wrap}>
                {data.map(item => (
                    <div>
                        <div className={styles.title_wrap}>
                            <div className={styles.flex}>
                                <img src={letterIcons[Letter.L]} alt="letter" />
                                <p className={styles.title_position}>BTCUSD</p>
                                <p className={styles.sox}>5OX</p>
                            </div>
                            <div className={styles.time_position}>{item.time}</div>
                        </div>

                        <div className={styles.item} key={item.size}>
                            <p className={styles.item_label}>{item.size}</p>
                            <p className={styles.item_value}>{item.sizeValue}</p>
                        </div>
                        <div className={styles.item} key={item.size}>
                            <p className={styles.item_label}>{item.strikePrice}</p>
                            <p className={styles.item_value}>{item.strikePriceValue}</p>
                        </div>
                        <div className={styles.item} key={item.size}>
                            <p className={styles.item_label}>{item.KnockOutPrice}</p>
                            <p className={styles.item_value}>{item.KnockOutPriceValue}</p>
                        </div>
                        <div className={styles.item} key={item.size}>
                            <p className={styles.item_label}>{item.PNL}</p>
                            <p className={styles.item_value}>{item.PNLValue}</p>
                        </div>
                    </div>
                ))}

                <Collapse
                    className={styles.collapse}
                    title="TAKE PROFIT"
                    titleClassName={styles.collapse_title}
                    isActive={builderActive}
                    onClick={onChangeBuilder}
                >
                <div className={styles.input_wrap}>
                    <RightSidebarInput
                        className={styles.input}
                        label="Target price"
                        symbol="$"
                        onFirstBtnClick={()=>{}}
                        onSecondBtnClick={()=>{}}
                        onChange={()=>{}}
                        value={targerPrice}
                        firstBtnIcon={FontIconName.ArrowRight}
                        secondBtnIcon={FontIconName.ArrowRight}
                        firstIconClassName={styles.up_icon}
                        secondIconClassName={styles.down_icon}
                    />
                    <RightSidebarInput
                        className={styles.input}
                        label="Target ROI"
                        symbol="%"
                        onFirstBtnClick={()=>{}}
                        onSecondBtnClick={()=>{}}
                        onChange={()=>{}}
                        value={roi}
                        firstBtnIcon={FontIconName.ArrowRight}
                        secondBtnIcon={FontIconName.ArrowRight}
                        firstIconClassName={styles.up_icon}
                        secondIconClassName={styles.down_icon}
                    />
                </div>
                <div className={styles.buttons_wrap}>
                    <Button
                        color="transparent_primary"
                        className={cx(styles.button, styles.target_price_btn)}
                    >
                        - target price
                    </Button>
                    <Button
                        color="transparent_primary"
                        className={cx(styles.button, styles.sell_btn)}
                    >
                        sell
                    </Button>
                    <Button
                        className={cx(styles.button, styles.settle_btn)}
                        color="primary"
                    >
                        settle
                    </Button>
                </div>
                </Collapse>
            </div>
        </RightSidebarNavigation>
    );
};

export { RushMobile };