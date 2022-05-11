import React, {FC, useState} from 'react';
import styles from "./styles.module.scss";
import right_arrow from "@option-blitz/libs/assets/images/balances/icons/right_arrow.svg";


interface ICard {
    title: string,
    icon: string,
    subtitle?: string,
    currency?: string,
    price?: string,
}
interface Props {
    card: ICard,
    index: number,
    cardActive: number,
    titleColor?: string
}

const ChipCard:FC<Props> = ({card, index, cardActive, titleColor}) => {
    return (
        <div className={cardActive === index + 1 ? styles.balanceCardActive : styles.balanceCard}>
            <img className={styles.cardIcon} src={card.icon}/>
            <div className={styles.price}>
                <span className={styles.balanceCardTitle} style={{color: titleColor}}>{card.title}</span>
                {card.subtitle ?
                    <p className={styles.subtitle}>{card.subtitle}</p>
                    :
                    <p className={styles.value}><span>{card.price} </span>{card.currency}</p>
                }

            </div>
            <div className={styles.arrow}>
                <img src={right_arrow}/>
            </div>
        </div>
    );
};

export default ChipCard;
