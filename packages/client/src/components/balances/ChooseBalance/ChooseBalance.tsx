/* eslint-disable */
import React, {FC, useState} from 'react';
import styles from "./styles.module.scss";
import ChipCard from "../../../containers/Balances/ChipCard/ChipCard";
import useResize from '@option-blitz/libs/hooks/useResize';

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

  const { isMobile } = useResize();

  const [cardActive, setCardActive] = useState(1)
    return (
        <div className={ isMobile? styles.none : styles.balanceSection}>
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
