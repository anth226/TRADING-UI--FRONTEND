import React, { FC } from 'react';
import { Crypto, cryptoIcons } from '@option-blitz/libs/assets/images/crypto/crypto';
import styles from './styles.module.scss';
import { PositionItem } from '../../../hooks/rightSidebar/useTouchSidebarHandlers';
import { Letter, letterIcons } from '../../../constants/letters/letters';

interface Props {
  items: PositionItem[]
  date?: string
  title?: string
  dateInTitle?: boolean
}

const RightSidebarPosInfo: FC<Props> = ({
  items,
  date,
  title,
  dateInTitle,
}) => (
  <div className={styles.wrap}>
    <div className={styles.title_section}>
      <div className={styles.title_wrap}>
        <img src={letterIcons[Letter.L]} alt="letter" />
        <p className={styles.title}>{title}</p>
        <img className={styles.coin} src={cryptoIcons[Crypto.BTC]} alt="coin" />
      </div>
      {dateInTitle && (
        <p className={styles.date}>{date}</p>
      )}
    </div>
    {!dateInTitle && (
      <p className={styles.date}>{date}</p>
    )}
    {items.map(({ label, value }) => (
      <div className={styles.item} key={label}>
        <p className={styles.item_label}>{label}</p>
        <p>{value}</p>
      </div>
    ))}
  </div>
);

export { RightSidebarPosInfo };
