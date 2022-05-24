/* eslint-disable */
import styles from './../styles.module.scss'

import Button from "@option-blitz/libs/components/inputs/Button";

import React from "react";
// import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
// import {RightSidebarInput} from "@option-blitz/libs/components/rightSidebar/RightSidebarInput";
// import {AmountInput} from "@option-blitz/libs/components/inputs/AmountInput";
// import {Dropdown} from "@option-blitz/libs/components/inputs/Dropdown";
// import {HeaderTabSelect} from "@option-blitz/libs/components/inputs/HeaderTabSelect";
// import Loader from "@option-blitz/libs/components/inputs/Loader";
// import {TextArea} from "@option-blitz/libs/components/inputs/TextArea";
// import {TextInputWrap} from "@option-blitz/libs/components/inputs/TextInputWrap";
// import {TargetPriceInput} from "../../../containers/leftSidebar/OpenPosition/TargetPriceInput";
import {TextInputCustom} from "components/Textinputcustom";


const NewPromoCode = () => {

    const mas =FontIconName.News

    // const handleChange = () => {
    //     setActive(false);
    // };
    // const newModal = () => {
    //     setActive(false);
    // };
    // const privatKeyModal = () => {
    //     setActive(false);
    //     setKey(true);
    // };

    return (
        <div className={styles.backfon}>
        <div className={styles.modal}>

            <div className={styles.border}>
                <div className={styles.row}>
                    <div className={styles.title} >
                        CREATE NEW PROMO CODE
                    </div>
                    <div >
                        <FontIcon name={FontIconName.Close} size={12}/>
                    </div>
                </div>

                <hr className={styles.hr} />

                {/*<div >*/}
                    {/*<div className={styles.row_input}>*/}
                    {/*    <div className={styles.input}>*/}
                    {/*        <TextInput*/}
                    {/*            label="Target ROI"*/}
                    {/*            right='$'*/}
                    {/*            value={25}*/}
                    {/*        />*/}
                    {/*       < span className={styles.context}>amount</span>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.input}>*/}
                    {/*        <TargetPriceInput*/}
                    {/*            label="Target ROI"*/}
                    {/*            symbol="$"*/}
                    {/*            value={25}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={styles.row_input}>*/}
                    {/*    <div className={styles.input}>*/}
                    {/*        <TargetPriceInput*/}
                    {/*            label="Target ROI"*/}
                    {/*            symbol="$"*/}
                    {/*            value={25}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.input}>*/}
                    {/*        <TargetPriceInput*/}
                    {/*            label="Target ROI"*/}
                    {/*            symbol="$"*/}
                    {/*            value={25}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={styles.row_input}>*/}
                    {/*    <div className={styles.input}>*/}
                    {/*        <TargetPriceInput*/}
                    {/*            label="Target ROI"*/}
                    {/*            symbol="$"*/}
                    {/*            value={25}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.input}>*/}
                    {/*        <TextInput*/}

                    {/*            value="Kamix 85"*/}
                    {/*            right={icon}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                <div className={styles.row}>
                    <div  className={styles.input}>
                        <TextInputCustom
                            value='25'
                            label='BONUS'
                            symbol="%"

                        />
                        <span className={styles.span}>Largest possible bonus for you current account status is 25%.</span>
                    </div>

                    <div className={styles.input}>
                        <TextInputCustom
                            value='25'
                            label='MINIMUM DEPOSIT'
                            symbol="$"

                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.input}>
                        <TextInputCustom
                            value="25%"
                            label='VALID UNTIL'
                            Icon={mas}
                        />
                        <span className={styles.span}>Max. is 30 days</span>
                    </div>

                    <div className={styles.input}>
                        <TextInputCustom
                            value='1'
                            label='NUMBER OF ACTIVATIONS PER USER'
                        />
                        <span className={styles.span}>Max. number of activations per user for your current account status is 1</span>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.input}>
                        <TextInputCustom
                            value='1'
                            label='NUMBER OF ACTIVATIONS PER GROUP'
                        />
                        <span className={styles.span}>Max. number of activations for this promo code</span>
                    </div>

                    <div className={styles.input}>
                        <TextInputCustom
                            value='25%'
                            label='EXECUTION COEFFICIENT'
                        />
                        <span className={styles.span}> Required turnover to be able to withdraw received bonus = Bonus amount x 100</span>
                    </div>
                </div>

                <div className= { styles.info}>
                    <div className={styles.iconinfmod}>
                        <FontIcon name={FontIconName.Info} size={15}/>
                    </div>
                    <div className={styles.info_text}>
                        <span>
                            Terms and Conditions:
                        </span>
                        <span>
                            1.  Bonus adds 25% of the deposit to your Live account balance.
                        </span>
                        <span>
                            2.  You may cancel the bonus at any time. In this case, bonus amount
                            will be deducted from your Live account balance.
                        </span>
                        <span>
                            3.  You can withdraw your deposited amount and profit at any moment if you have enough funds on your Live account balance.
                        </span>
                        <span>
                            4.  In case a withdrawal takes place before the bonus is executed, your active
                            unexecuted bonus will be deducted from your Live account balance.
                        </span>
                        <span>
                            5.  You can execute the bonus and withdraw it if your net trading turnover
                            is not less than $1250.
                        </span>
                        <span>
                            6.  The Company has a right to amend bonus terms or terminate this promotion
                            at any time without any notice.
                        </span>
                    </div>

                </div>
                <div className={styles.butt}>
                    <Button > CREATE </Button>
                </div>


            </div>
            </div>

        </div>

    );
};
export { NewPromoCode };