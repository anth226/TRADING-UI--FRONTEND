import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  value: number
  className?: string
}

const RightSidebarProgressbar: FC<Props> = ({
  value,
  className,
}) => (
  <div className={cx(styles.wrap, className)}>
    <p className={styles.label}>sentiment</p>
    <div className={styles.progress_wrap}>
      {value > 0 && (
        <span
          className={cx(styles.green_line, styles.line)}
          style={{ width: `${value}%` }}
        />
      )}
      <span className={cx(styles.red_line, styles.line)} />
    </div>
    <div className={styles.values_wrap}>
      <p className={styles.green_value}>{`${value}%`}</p>
      <p className={styles.red_value}>{`${100 - value}%`}</p>
    </div>
  </div>
);

export { RightSidebarProgressbar };
