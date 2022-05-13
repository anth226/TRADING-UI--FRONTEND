/* eslint-disable */
import React, {FC, useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import styles from './styles.module.scss'
import arrows from '../../../../libs/assets/images/arrows.svg'
import bitcoin_icon from "@option-blitz/libs/assets/images/balances/icons/bitcoin.svg";
import {SelectionsTable} from "../../containers/Selections/SelectionsTable";


const Selections:FC = () => {
    const [activeOption, setActiveOption] = useState(1)
    return (
        <MainLayout>
            <div className={styles.balances}>
                <div className={styles.balancesLeft}>
                    <div className={styles.balancesInner}>
                        <div className={styles.titleBlock}>
                            <img src={arrows}/>
                            <span className={styles.title}>Binary options</span>
                        </div>
                        <div className={styles.badge}>
                            2
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.optionTitle}>
                            <img src={bitcoin_icon}/>
                            <div>
                                <h4>Forex</h4>
                                <span>All major FX pairs with real-time updated currency prices</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.badge}>
                                2
                            </div>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.optionTitle}>
                            <img src={bitcoin_icon}/>
                            <div>
                                <h4>Forex</h4>
                                <span>All major FX pairs with real-time updated currency prices</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.badge}>
                                2
                            </div>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.optionTitle}>
                            <img src={bitcoin_icon}/>
                            <div>
                                <h4>Forex</h4>
                                <span>All major FX pairs with real-time updated currency prices</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.badge}>
                                2
                            </div>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.optionTitle}>
                            <img src={bitcoin_icon}/>
                            <div>
                                <h4>Forex</h4>
                                <span>All major FX pairs with real-time updated currency prices</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.badge}>
                                2
                            </div>
                        </div>
                    </div>
                    <div className={styles.balancesInner}>
                        <div className={styles.titleBlock}>
                            <img src={arrows}/>
                            <span className={styles.title}>Touch options</span>
                        </div>
                        <div className={styles.badge}>
                            2
                        </div>
                    </div>
                    <div className={styles.balancesInner}>
                        <div className={styles.titleBlock}>
                            <img src={arrows}/>
                            <span className={styles.title}>Turbo rush</span>
                        </div>
                        <div className={styles.badge}>
                            2
                        </div>
                    </div>
                    <div className={styles.balancesInner}>
                        <div className={styles.titleBlock}>
                            <img src={arrows}/>
                            <span className={styles.title}>Binary options</span>
                        </div>
                        <div className={styles.badge}>
                            2
                        </div>
                    </div>
                </div>
                <div className={styles.balancesRight}>
                    <SelectionsTable/>
                </div>
            </div>
        </MainLayout>
    );
};

export default Selections;
