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
import coin_icon from '../../../../libs/assets/images/balances/icons/coin.svg'
import balance_icon from '../../../../libs/assets/images/balances/icons/balance.svg'
import bonus_icon from '../../../../libs/assets/images/balances/icons/bonus.svg'
import bitcoin_icon from '../../../../libs/assets/images/balances/icons/bitcoin.svg'
import copy from '../../containers/Modals/ModalIcons/copy.svg'
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import ChipCard from "../../containers/Balances/ChipCard/ChipCard";


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

const chooseBalanceData = [
    {
        title: 'live balance',
        price: '1,000',
        currency: 'USDC',
        icon: coin_icon
    },
    {
        title: 'bonus balance',
        price: '500',
        currency: 'BLZ',
        icon: bonus_icon
    },
    {
        title: 'blx balance',
        price: '500',
        currency: 'BLX',
        icon: balance_icon
    }
]

const paymentMethods = [
    {
        title: 'Cryptocurrency',
        subtitle: 'BTC ETH LTC USDС and 100 more',
        icon: coin_icon
    },
    {
        title: 'Credit/Debit card',
        subtitle: 'USD EUR CAD and 39 more',
        icon: coin_icon
    },
    {
        title: 'Neteller',
        subtitle: 'USD EUR',
        icon: coin_icon
    },
    {
        title: 'Bank transfer',
        subtitle: '',
        icon: coin_icon
    },
    {
        title: 'Skrill',
        subtitle: 'USD EUR',
        icon: coin_icon
    },
]

const coins = [
    {
        name: 'BTC',
        icon: bitcoin_icon,
    },
    {
        name: 'ETH',
        icon: bitcoin_icon,
    },
    {
        name: 'XRP',
        icon: bitcoin_icon,
    },
    {
        name: 'LTC',
        icon: bitcoin_icon,
    }
]

const Balances: FC = () => {
    const [activeItem, setActiveItem] = useState(1)
    const [cardActive, setCardActive] = useState(1)
    const [methodActive, setMethodActive] = useState(1)
    const [coinActive, setCoinActive] = useState(1)
    return (
        <MainLayout>
            <div className={styles.container}>
                <div className={styles.cardList}>
                    <CardList data={cards}/>
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
                <div className={styles.balanceSection}>
                    <h4>Choose a balance</h4>
                    <div className={styles.balance}>
                        {chooseBalanceData.map((card, i) => (
                            <div className={styles.cardOuter} onClick={() => setCardActive(i + 1)}>
                                <ChipCard cardActive={cardActive} card={card} index={i}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.method}>
                    <h4>Choose a finding method</h4>
                    <div className={styles.finding}>
                        <div className={styles.search}>
                            <TextInput
                                left={<FontIcon size={14} className={styles.iconSearch} name={FontIconName.Search}/>}
                                type={'text'}
                                placeholder={'Search'}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.payment}>
                            <div className={styles.paymentSection}>
                                {paymentMethods.map((method, i) => (
                                    <div className={methodActive === i + 1 ? '' : styles.methodOuter} onClick={() => setMethodActive(i + 1)}>
                                        <ChipCard card={method} titleColor="#00CD86" index={i} cardActive={methodActive}/>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.paymentSection}>
                                {coins.map((coin, i) => (
                                    <div className={coinActive === i + 1 ? styles.coinActive : styles.coin} onClick={() => setCoinActive(i + 1)}>
                                        <img src={coin.icon}/>
                                        <div>{coin.name}</div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.paymentSection}>
                                <div className={styles.youSend}>
                                    <TextInput
                                        type={'text'}
                                        placeholder={'Enter value'}
                                        label="send"
                                        className={styles.exchange}
                                    />
                                </div>
                                <div className={styles.ratesSection}>
                                    <div className={styles.rates}>
                                        <span className={styles.rate}>1 BTC ~ 42071.388453 USDTERC20</span>
                                        <span className={styles.noFee}>No Extra Fee</span>
                                    </div>
                                    <div className={styles.expectedRate}>Expected Rate</div>
                                </div>
                                <TextInput
                                    type={'text'}
                                    label="send"
                                    className={styles.exchange}
                                />
                            </div>
                            <div className={styles.paymentSection}>
                                <p className={styles.paymentTitle}>Send the funds you would like to deoposit to this address</p>
                                <div className={styles.keySection}>
                                    <span className={styles.key}>36HSSbUoPUCVwdJ6XqjPEYARM8qRheFo5z</span>
                                    <div className={styles.copy}>
                                        <img src={copy}/>
                                    </div>
                                </div>
                                <div className={styles.qrCodeBlock}>
                                    <div className={styles.qrCode}>
                                        QR CODE
                                    </div>
                                    <span>Scan address to recive funds</span>
                                </div>
                                <div className={styles.subInfo}>
                                    <span>Balance created after I net. conf.</span>
                                    <span>* Incoming transaction</span>
                                </div>
                                <div className={styles.total}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export {Balances};
