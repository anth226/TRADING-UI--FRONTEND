import React, {FC, useState} from 'react';
import styles from "./styles.module.scss";
import ChipCard from "../../../containers/Balances/ChipCard/ChipCard";

interface IChoose {
    title: string,
    price: string,
    currency: string,
    icon: string
}

interface Props {
    chooseBalanceData: IChoose[]
}
const ChooseBalance:FC<Props> = ({chooseBalanceData}) => {
    const [cardActive, setCardActive] = useState(1)
    return (
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
    );
};

export {ChooseBalance};
