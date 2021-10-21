import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

interface IProps {
  checked: boolean;
  onCheck: (val: boolean) => void;
  className?: string;
  hasError?: boolean;
  size?: number;
}

const Checkbox: FC<IProps> = ({
  checked,
  onCheck,
  children,
  className,
  hasError,
  size = 24,
}) => {
  const onMouseDown = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      onCheck(!checked);
    },
    [checked],
  );

  return (
    <button
      className={classNames(styles.checkbox, className, {
        [styles.checked]: checked,
      })}
      onMouseDown={onMouseDown}
      type="button"
    >
      <span
        className={classNames(styles.inner, { [styles.error]: hasError })}
        style={{ width: size, height: size }}
      >
        {checked && <FontIcon name={FontIconName.Checked} size={12} />}
      </span>

      {!!children && <div className={styles.label}>{children}</div>}
    </button>
  );
};

export { Checkbox };
