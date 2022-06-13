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
                    {/*<SelectionsTable/>  */}
                </div>
            </div>
            )}
            {isMobile && (
                <div>
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
            )}
         </MainLayout>
    );
};

export default Selections;
