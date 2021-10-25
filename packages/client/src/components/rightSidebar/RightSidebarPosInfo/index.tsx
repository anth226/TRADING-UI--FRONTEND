import React, { FC } from 'react';
import { Coin, coinIcons } from '@option-blitz/libs/constants/coin';
import styles from './styles.module.scss';
import { PositionItem } from '../../../hooks/rightSidebar/useTouchSidebarHandlers';
import { Letter, letterIcons } from '../../../constants/letters/letters';

interface Props {
  items: PositionItem[]
  date?: string
  title?: string
}

const RightSidebarPosInfo: FC<Props> = ({
  items,
  date,
  title,
}) => (
  <div className={styles.wrap}>
    <div className={styles.position_title_wrap}>
      <img src={letterIcons[Letter.L]} alt="letter" />
      <p className={styles.position_title}>{title}</p>
      <img className={styles.coin} src={coinIcons[Coin.BTC]} alt="coin" />
    </div>
    <p className={styles.date}>{date}</p>
    {items.map(({ label, value }) => (
      <div className={styles.position_item} key={label}>
        <p className={styles.position_item_label}>{label}</p>
        <p>{value}</p>
      </div>
    ))}
  </div>
);

export { RightSidebarPosInfo };
