import React, { ChangeEventHandler, FC } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

interface Props {
  label: string
  value?: string
  symbol: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFirstBtnClick: () => void
  onSecondBtnClick: () => void
  firstBtnIcon: FontIconName
  secondBtnIcon: FontIconName
}

const RightSidebarInput: FC<Props> = ({
  label,
  value,
  symbol,
  onChange,
  onFirstBtnClick,
  onSecondBtnClick,
  firstBtnIcon,
  secondBtnIcon,
}) => (
  <div className={styles.wrap}>
    <div className={styles.content}>
      <p className={styles.label}>{label}</p>
      <div className={styles.input_wrap}>
        <input 
          onChange={onChange}
          className={styles.input}
          type="text" 
          value={value} 
        />
        <span className={styles.symbol}>{symbol}</span>
      </div>
    </div>
    <div className={styles.button_wrap}>
      <button onClick={onFirstBtnClick} className={styles.button}>
        <FontIcon size={10} name={firstBtnIcon} />
      </button>
      <button onClick={onSecondBtnClick} className={styles.button}>
        <FontIcon size={10} name={secondBtnIcon} />
      </button>
    </div>
  </div>
);

export { RightSidebarInput };
