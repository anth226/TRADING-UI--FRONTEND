/* eslint-disable */
import React, {FC} from 'react';
import styles from './styles.module.scss'
import bonus_icon from "@option-blitz/libs/assets/images/balances/icons/bonus.svg";
import ChipCard from "../../../containers/Balances/ChipCard/ChipCard";
import copy from '../../../containers/Modals/ModalIcons/copy.svg'
import Button from "@option-blitz/libs/components/inputs/Button";
import useResize from '@option-blitz/libs/hooks/useResize';

const card =
    {
        title: 'bonus balance',
        price: '500',
        currency: 'BLZ',
        icon: bonus_icon
    }

const Bonuses:FC = () => {
  const { isMobile } = useResize();

  return (
        <div className={styles.bonuses}>
            <div className={styles.cardBlock}>
                <ChipCard card={card}/>
            </div>
            <div className={isMobile ? styles.depositMobile : styles.deposit}>
                <h4 className={styles.depositTitle}>Deposit</h4>
                <div className={styles.tokenBlock}>
                    <div className={styles.token}>
                        <span>BLZ token address receive</span>
                        <span>  0386 3792 3969 02969</span>
                    </div>
                    <div className={styles.copy}>
                        <img src={copy}/>
                    </div>
                </div>
                <div className={styles.convert}>
                    <h4 className={styles.convertTitle}>Convert to USDС</h4>
                    <p className={styles.subtitle}>
                        Balance available to convert 0.0 BLZ
                        minimum wager x20. You must turn more over BLZ to redeem funds.
                    </p>
                </div>
                <div>
                    <h4 className={styles.redeemTitle}>Redeem</h4>
                    <div className={styles.tokenBlock}>
                        <div className={styles.token}>
                            <span>Amount</span>
                            <span>0</span>
                        </div>
                    </div>
                    <Button color="primary" className={styles.button}>
                        SUBMIT
                    </Button>
                </div>
            </div>
        </div>
    );
};

export {Bonuses};
