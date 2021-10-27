import React, { FC, MouseEventHandler, useCallback } from 'react';
import styles from './styles.module.scss';
import { Coin, coinIcons, coinNames } from '../../../constants/coin';
import hotAssetsDiagram from '../../../assets/images/hot_assets_diagram.svg';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

interface Props {
  coin: Coin
  firstValue: string
  secondValue: string
}

const HotAssetsCard: FC<Props> = ({
  coin,
  firstValue,
  secondValue,
}) => {
  const cardButton = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  return (
    <a onClick={cardButton} href="/" className={styles.wrap}>
      <div className={styles.title_wrap}>
        <div className={styles.coin_wrap}>
          <img src={coinIcons[coin]} alt="coin" />
          <p className={styles.title}>{coinNames[coin]}</p>
        </div>

        <div className={styles.info_wrap}>
          <p className={styles.first_value}>{firstValue}</p>
          <span className={styles.second_value}>{secondValue}</span>
        </div>
      </div>
      <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />

      <button className={styles.button}>
        <FontIcon size={10} name={FontIconName.Plus} />
      </button>
    </a>
  );
};

export { HotAssetsCard };
