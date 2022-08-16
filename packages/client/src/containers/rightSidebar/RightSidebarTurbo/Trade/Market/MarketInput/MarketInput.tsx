import React, { ChangeEventHandler, FC } from 'react';
import cx from 'classnames';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import styles from './styles.module.scss';

type Type = 'normal' | 'small' | 'input';

interface Props {
  type?: Type
  className?: string
  label?: string
  value?: number
  symbol?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFirstBtnClick?: () => void
  onSecondBtnClick?: () => void
  firstBtnIcon?: FontIconName
  secondBtnIcon?: FontIconName
  firstIconClassName?: string
  secondIconClassName?: string
  inputClassName?: string
  labelClassName?: string
  valueClassName?: string
}

const MarketInput: FC<Props> = ({
  type = 'normal',
  label,
  value,
  symbol,
  onChange,
  onFirstBtnClick,
  onSecondBtnClick,
  firstBtnIcon,
  secondBtnIcon,
  className, valueClassName,
  firstIconClassName,
  secondIconClassName,

}) => (
  <div className={cx(styles.wrap, className)}>
    {type === 'normal' && (
    <>
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
          <FontIcon className={firstIconClassName} size={10} name={firstBtnIcon} />
        </button>
        <button onClick={onSecondBtnClick} className={styles.button}>
          <FontIcon className={secondIconClassName} size={10} name={secondBtnIcon} />
        </button>
      </div>
    </>
    )}
    {type === 'small' && (
    <div className={styles.content}>
      <div className={styles.label_wrap}>
        <p className={styles.label_small}>{label}</p>
        <span className={styles.symbol_small}>{symbol}</span>
      </div>
      <div className={styles.button_wrap_small}>
        <button onClick={onFirstBtnClick} className={styles.button_small}>
          <FontIcon name={firstBtnIcon} className={firstIconClassName} size={10} />
        </button>
        <input
          onChange={onChange}
          className={cx(styles.input, styles.input_small, valueClassName)}
          type="text"
          value={value}
        />
        <button onClick={onSecondBtnClick} className={styles.button_small}>
          <FontIcon className={secondIconClassName} size={10} name={secondBtnIcon} />
        </button>
      </div>
    </div>
    )}
    {type === 'input' && (
      <div className={styles.content}>
        <div className={styles.label_wrap}>
          <p className={styles.label_small}>{label}</p>
          <span className={styles.symbol_small}>{symbol}</span>
        </div>
        <input
          onChange={onChange}
          className={cx(styles.input, styles.input_input, valueClassName)}
          type="text"
          value={value}
        />
      </div>
    )}
  </div>
);

export { MarketInput };
