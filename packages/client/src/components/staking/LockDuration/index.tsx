/* eslint-disable */
import React, { ChangeEventHandler, FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import useResize from '@option-blitz/libs/hooks/useResize';

type Type = 'normal' | 'small';

interface Props {
    type?: Type
    className?: string
    label: string
    value?: any
    symbol?: string
    onChange?: any
    onFirstBtnClick: () => void
    onSecondBtnClick: () => void
    firstBtnIcon: FontIconName
    secondBtnIcon: FontIconName
    firstIconClassName?: string
    secondIconClassName?: string
    inputClassName?: string
    labelClassName?: string
}

const LockDuration: FC<Props> = ({
                                          type = 'normal',
                                          label,
                                          value,
                                          symbol,
                                          onChange,
                                          onFirstBtnClick,
                                          onSecondBtnClick,
                                          firstBtnIcon,
                                          secondBtnIcon,
                                          className,
                                          firstIconClassName,
                                          secondIconClassName,
                                      }) => {
  const { isMobile } = useResize();

  return (
    <div className={cx(isMobile ? styles.wrap_mobile :styles.wrap, className)}>
      <div className={styles.content}>
        <div className={styles.input_wrap}>
          <p className={styles.label}>{label}</p>
          <span className={styles.symbol}>{symbol}</span>
        </div>

        <div className={styles.input_wrap}>
          <button onClick={onFirstBtnClick} className={styles.buttonUp}>
            <FontIcon className={firstIconClassName} size={10} name={firstBtnIcon} />
          </button>
          <input
            onChange={onChange}
            className={isMobile ? styles.input_mobile : styles.input}
            type="text"
            value={value}
          />
          <button onClick={onSecondBtnClick} className={styles.buttonDown}>
            <FontIcon className={secondIconClassName} size={10} name={secondBtnIcon} />
          </button>
        </div>
      </div>

    </div>
  );
}

export { LockDuration };
