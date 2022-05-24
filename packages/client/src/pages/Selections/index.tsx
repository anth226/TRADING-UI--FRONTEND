/* eslint-disable */
import React, {FC, useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import styles from './styles.module.scss'
import arrows from '../../../../libs/assets/images/arrows.svg'
import cir from '../../../../libs/assets/images/circle.svg'
import mol from '../../../../libs/assets/images/mol.svg'
import star from '../../../../libs/assets/images/star.svg'
// import {SelectionsTable} from "../../containers/Selections/SelectionsTable";
import BinaryOptionsTab from "../../components/select/BinaryOptionsTab/BinaryOptionsTab";
import {Forex} from "../../components/select/BinaryOptionsTab/Forex/Forex";
import Binary from "../../components/profile/BinaryTab/Binary";
import TurboRush from "../../components/profile/TurboRushTab/TurboRush";
import Rush from "../../components/profile/RushTab/Rush";
import Touch from "../../components/profile/TouchTab/Touch";
import NoTouch from "../../components/profile/NoTouchTab/NoTuch";
import {SelectionsTable} from "../../containers/Selections/SelectionsTable";
import {Metals} from "../../components/select/BinaryOptionsTab/Forex/Metals";
import {Crypto} from "../../components/select/BinaryOptionsTab/Forex/Crypto";
import Promocode from "../Promo_Code";

const TradingSelectItems = [
    {
      icon: arrows,
      title: 'Binary options',
      badge: '2',
    },
    {
        icon: cir,
        title: 'Touch options',
        badge: '15',
    },
    {
        icon: mol,
        title: 'No-Touch options',
        badge: '72',
    },
    {
        icon: star,
        title: 'Classic options',
        badge: '6',
    },
]


const Selections:FC = () => {
    const [activeItemtab, setActiveItemtab] = useState(0)

    const handlerChange = (index: number) => {
        if (activeItemtab === index) {
            setActiveItemtab(-1)
        } else {
            setActiveItemtab(index)

        }
    }



    return (
        <MainLayout>
            {/*<Promocode/>*/}
             <div className={styles.balances}>
                 <div className={styles.balancesLeft}>
                     <div className={styles.balancesInner}>

                         {TradingSelectItems.map((item, index) =>(
                            <div key={item.title} className={styles.mag} >
                                <hr className={styles.hr} />
                                <div className={styles.titleBlockItem}>
                                    <div className={styles.titleBlock}
                                         onClick={()=> handlerChange(index)}>
                                        <img src={item.icon} alt='' />
                                        <span className={styles.title}> {item.title}</span>
                                    </div>
                                    <div className={styles.badge}>{item.badge}</div>
                                </div>
                                <div className={activeItemtab===index ? styles.answer: styles.none}><BinaryOptionsTab/></div>

                            </div>
                        ))}
                    </div>

                </div>
                <div className={styles.balancesRight} >
                    <Forex/>
                    {/*<SelectionsTable/>  */}

                </div>
            </div>
        </MainLayout>

    );
};

export default Selections;
