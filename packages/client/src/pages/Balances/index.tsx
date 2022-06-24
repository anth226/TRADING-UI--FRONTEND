/* eslint-disable */
import React, {FC, useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import styles from './styles.module.scss'
import CardList from "../../containers/Balances/CardList/CardList";
import card_1 from '../../../../libs/assets/images/balances/blue_card.svg'
import card_2 from '../../../../libs/assets/images/balances/pink_card.png'
import card_3 from '../../../../libs/assets/images/balances/green_card.svg'
import {DepositIcon} from "../../components/balances/DepositIcon";
import {WithdrawIcon} from "../../components/balances/WithdrawIcon";
import {HistoryIcon} from "../../components/balances/HistoryIcon";
import Deposit from "../../components/balances/DepositTab/Deposit";
import Withdraw from "../../components/balances/WithdrawTab/Withdraw";
import History from "../../components/balances/HistoryTab/History";
import {Bonuses} from "../../components/balances/BonusesTab/Bonuses";
import {Blx} from "../../components/balances/BlxTab/Blx";
import useResize from '@option-blitz/libs/hooks/useResize';
import CardBalance from '../../containers/Balances/CardBalance/CardBalance';


const cards = [
    {
        id: 1,
        img: card_1
    },
    {
        id: 2,
        img: card_2
    },
    {
        id: 3,
        img: card_3
    }
]

const navigation = [
    {
        name: 'deposit',
        icon: <DepositIcon color={'#fff'}/>
    },
    {
        name: 'withdraw',
        icon: <WithdrawIcon color={'#fff'}/>
    },
    {
        name: 'history',
        icon: <HistoryIcon color={'#fff'}/>
    },
    {
        name: 'bonuses',
    },
    {
        name: 'blx',
    }
]



const Balances: FC = () => {

    const { isMobile } = useResize();

    const [activeItem, setActiveItem] = useState(1)

    const whichTab = () => {

        switch (activeItem) {
            case 1:
                return <Deposit/>
            case 2:
                return <Withdraw/>
            case 3:
                return <History/>
            case 4:
                return <Bonuses/>
            case 5:
                return <Blx/>
            default:
                return <Deposit/>
        }
    }

    return (
        <MainLayout>
            <div className={isMobile? styles.balancesMobile :styles.balances}>
                <div className={isMobile ? styles.containerMobile : styles.container}>
                    <div className={styles.cardList}>
                        {!isMobile && <CardList data={cards}/>}
                        {isMobile && (<CardBalance/>)}
                    </div>
                    <div className={styles.navigation}>
                        {navigation.map((link, i) => (
                            <div className={activeItem === i + 1 ? styles.navItemActive : styles.navItem}
                                 onClick={() => setActiveItem(i + 1)}>
                                {link.icon}
                                <div>{link.name}</div>
                            </div>
                          ))}
                      </div>
                    {whichTab()}
                  </div>
            </div>
        </MainLayout>
    );
};

export {Balances};
