import React, { FC } from 'react';
import { Crypto, cryptoIcons } from '@option-blitz/libs/constants/crypto';
import cx from 'classnames';
import styles from './styles.module.scss';
import { PositionItem } from '../../../hooks/rightSidebar/useTouchSidebarHandlers';
import { Letter, letterIcons } from '../../../constants/letters/letters';

type SizeType = 'normal' | 'small';

interface Props {
  items: PositionItem[]
  date?: string
  title?: string
  type?: SizeType
}

const RightSidebarPosInfo: FC<Props> = ({
  items,
  date,
  title,
  type,
}) => {
  const isSmall = type === 'small';
  return (
    <div className={styles.wrap}>
      <div className={styles.title_section}>
        <div className={styles.title_wrap}>
          <img src={letterIcons[Letter.L]} alt="letter" />
          <p className={styles.title}>{title}</p>
          <img className={styles.coin} src={cryptoIcons[Crypto.BTC]} alt="coin" />
        </div>
        {isSmall && (
          <p className={styles.date}>{date}</p>
        )}
      </div>
      {!isSmall && (
        <p className={styles.date}>{date}</p>
      )}
      {items.map(({ label, value }) => (
        <div className={styles.item} key={label}>
          <p className={cx(styles.item_label, { [styles.item_label_small]: isSmall })}>{label}</p>
          <p className={cx({ [styles.item_value_small]: isSmall })}>{value}</p>
        </div>
      ))}
    </div>
  );
};

export { RightSidebarPosInfo };
