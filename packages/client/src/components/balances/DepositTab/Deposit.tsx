/* eslint-disable */
import React, {FC, useState} from 'react';
import styles from "./styles.module.scss";
import ChipCard from "../../../containers/Balances/ChipCard/ChipCard";
import {TextInput} from "@option-blitz/libs/components/inputs/TextInput";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import copy from "../../../containers/Modals/ModalIcons/copy.svg";
import coin_icon from "@option-blitz/libs/assets/images/balances/icons/coin.svg";
import bonus_icon from "@option-blitz/libs/assets/images/balances/icons/bonus.svg";
import balance_icon from "@option-blitz/libs/assets/images/balances/icons/balance.svg";
import bitcoin_icon from "@option-blitz/libs/assets/images/balances/icons/bitcoin.svg";
import {ChooseBalance} from "../ChooseBalance/ChooseBalance";
import useResize from '@option-blitz/libs/hooks/useResize';

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

const Deposit: FC = () => {

    const [methodActive, setMethodActive] = useState(1)
    const [coinActive, setCoinActive] = useState(1)

    const [copied, setCopied] = useState(false)

    const { isMobile } = useResize();

    return (
        <div>
            <ChooseBalance chooseBalanceData={chooseBalanceData}/>
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
                        <div className={isMobile ? styles.paymentSectionMobile : styles.paymentSection}>
                            {paymentMethods.map((method, i) => (
                                <div className={methodActive === i + 1 ? '' : styles.methodOuter} onClick={() => setMethodActive(i + 1)}>
                                    <ChipCard card={method} titleColor="#00CD86" index={i} cardActive={methodActive}/>
                                </div>
                            ))}
                        </div>
                        <div className={isMobile ? styles.paymentSectionMobile : styles.paymentSection}>
                            {coins.map((coin, i) => (
                                <div className={coinActive === i + 1 ? styles.coinActive : styles.coin} onClick={() => setCoinActive(i + 1)}>
                                    <img src={coin.icon}/>
                                    <div>{coin.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className={isMobile ? styles.paymentSectionMobile : styles.paymentSection}>
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
                        <div className={isMobile ? styles.paymentSectionMobile : styles.paymentSection}>
                            <p className={styles.paymentTitle}>Send the funds you would like to deposit to this address</p>
                            <div className={styles.keySection}>
                                <span className={styles.key}>36HSSbUoPUCVwdJ6XqjPEYARM8qRheFo5z</span>
                                <div className={styles.copy} onClick={() => {
                                    navigator.clipboard.writeText('36HSSbUoPUCVwdJ6XqjPEYARM8qRheFo5z')
                                    setCopied(true)
                                }}>
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
                                <div>
                                    <span>Amount</span>
                                    <span>0.0076</span>
                                </div>
                                <div>
                                    <span>Crypto</span>
                                    <span>ETH</span>
                                </div>
                                <div>
                                    <span>network conf</span>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
