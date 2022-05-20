/* eslint-disable */
import React, {FC, useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import styles from './styles.module.scss'
import arrows from '../../../../libs/assets/images/arrows.svg'
import {SelectionsTable} from "../../containers/Selections/SelectionsTable";
import BinaryOptionsTab from "../../components/select/BinaryOptionsTab/BinaryOptionsTab";
import {Forex} from "../../components/select/BinaryOptionsTab/Forex/Forex";

const TradingSelectItems = [
    {
      icon: arrows,
      title: 'Binary options',
      badge: '2',
    },
    {
        icon: arrows,
        title: 'Touch options',
        badge: '15',
    },
    {
        icon: arrows,
        title: 'No-Touch options',
        badge: '72',
    },
    {
        icon: arrows,
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
            <div className={styles.balances}>
                <div className={styles.balancesLeft}>
                    <div className={styles.balancesInner}>

                        {TradingSelectItems.map((item, index) =>(
                            <div key={item.title} >
                                <div className={styles.titleBlockItem}>
                                    <div className={styles.titleBlock}
                                         onClick={()=> handlerChange(index)}>
                                        <img src={item.icon} />
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
                    {/*<SelectionsTable/>*/}
                </div>
            </div>
        </MainLayout>
    );
};

export default Selections;
