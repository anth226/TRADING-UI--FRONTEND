/* eslint-disable */
import React, {FC, useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import styles from './styles.module.scss'
import arrows from '../../../../libs/assets/images/arrows.svg'
import cir from '../../../../libs/assets/images/circle.svg'
import mol from '../../../../libs/assets/images/mol.svg'
import star from '../../../../libs/assets/images/star.svg'
import BinaryOptionsTab from "../../components/select/BinaryOptionsTab/BinaryOptionsTab";
import {Forex} from "../../components/select/BinaryOptionsTab/Forex/Forex";
import useResize from "@option-blitz/libs/hooks/useResize";


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
        icon: cir,
        title: 'Classic options',
        badge: '6',
    },
    {
        icon: star,
        title: 'Turbo',
        badge: '6',
    },
]
const TradingSelectItemsMob = [
    {
        icon: arrows,
        title: 'Binary options',
        subtitle: 'Speculate up/down price movements across a range of assets.',
        badge: '2',
    },
    {
        icon: cir,
        title: 'Touch options',
        subtitle: 'Select target price, expiration and if the barrier is broken receive payout.',
        badge: '15',
    },
    {
        icon: mol,
        title: 'No-Touch options',
        subtitle: 'Price must not beak through barrier or range during trade team.',
        badge: '72',
    },
    {
        icon: cir,
        title: 'Classic options',
        subtitle: 'Select the assets which will change the most in price at expiry.',
        badge: '6',
    },
    {
        icon: star,
        title: 'Turbo',
        subtitle: 'Same as Turbo Rush but add extra conditions and extend expiration to supercharge payout.',
        badge: '6',
    },
]


const Selections:FC = () => {
    const [activeItemtab, setActiveItemtab] = useState(0)
    const { isMobile } = useResize();

    const handlerChange = (index: number) => {
        if (activeItemtab === index) {
            setActiveItemtab(-1)
        } else {
            setActiveItemtab(index)

        }
    }



    return (
        <MainLayout  >
            {!isMobile && (
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
                </div>
            </div>
            )}

            {isMobile && (
                <div className={styles.selection}>
                    {TradingSelectItemsMob.map((item, index) =>(
                        <div key={item.title} className={styles.mag} >
                            <hr className={styles.hr} />
                            <div className={styles.titleBlockItem}>
                                <div className={styles.titleBlock}
                                     onClick={()=> handlerChange(index)}>
                                    <img src={item.icon} alt='' />
                                    <div className={styles.column}>
                                        <span className={styles.title}> {item.title}</span>
                                        <span className={styles.subtitle}> {item.subtitle}</span>
                                    </div>
                                </div>
                                <div className={styles.badge}>{item.badge}</div>
                            </div>
                            <div className={activeItemtab===index ? styles.answer: styles.none}><BinaryOptionsTab/></div>
                        </div>
                    ))}
                    {/*<div className={ styles.balancesRight} >*/}
                    {/*    <Forex isMobile/>*/}
                    {/*</div>*/}
                </div>
            )}
         </MainLayout>
    );
};

export default Selections;
