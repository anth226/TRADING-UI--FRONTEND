/* eslint-disable */
import styles from './../styles.module.scss'
import Button from "@option-blitz/libs/components/inputs/Button";
import React from "react";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {TextInputCustom} from "components/Textinputcustom";

interface Props {
    active?: boolean
    setActive?: any
    setSuccess?:boolean
    isMobile: boolean
}

const NewPromoCode = ({active, setActive, isMobile}:Props) => {

    const mas =FontIconName.News

    const handleChange = () => {
        setActive(false);
    };
    const create = () => {
        setActive(false);
        // setSuccess(true);
    }

    return (
        <div className={active ? styles.backfon: styles.none}>
        <div className={styles.modal}>

            <div className={styles.border}>

                <div className={styles.row}>
                    <div className={styles.title} >
                        CREATE NEW PROMO CODE
                    </div>
                    <button type='button' onClick={handleChange}>

                        <FontIcon name={FontIconName.Close} size={12}/>
                    </button>
                </div>

                <hr className={styles.hr} />
                {!isMobile && (
                    <div>
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
                    </div>
                )}
                {isMobile && (
                    <div className={styles.col}>
                        <div className={styles.input}>
                            <TextInputCustom
                                value='25'
                                label='BONUS'
                               className={styles.symbol}
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
                )}


                <div className= { styles.info}>
                    <div className={styles.iconinfmod}>
                        <FontIcon name={FontIconName.Info} size={15}/>
                    </div>
                    <div className={styles.info_text}>
                        <p className={styles.info_title}>
                            Terms and Conditions:
                        </p>
                        <p>
                            1.  Bonus adds 25% of the deposit to your Live account balance.
                        </p>
                        <p>
                            2.  You may cancel the bonus at any time. In this case, bonus amount
                            will be deducted from your Live account balance.
                        </p>
                        <p>
                            3.  You can withdraw your deposited amount and profit at any moment if you have enough funds on your Live account balance.
                        </p>
                        <p>
                            4.  In case a withdrawal takes place before the bonus is executed, your active
                            unexecuted bonus will be deducted from your Live account balance.
                        </p>
                        <p>
                            5.  You can execute the bonus and withdraw it if your net trading turnover
                            is not less than $1250.
                        </p>
                        <p>
                            6.  The Company has a right to amend bonus terms or terminate this promotion
                            at any time without any notice.
                        </p>
                    </div>

                </div>

                <div className={styles.butt}>
                    <Button className={styles.button} onClick={() => create }> CREATE </Button>
                </div>
            </div>
            </div>

        </div>

    );
};
export { NewPromoCode };