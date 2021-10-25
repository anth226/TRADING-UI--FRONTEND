import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  percents: string
  balance: string
  className?: string
}

const RightSidebarReturns: FC<Props> = ({
  percents,
  balance,
  className,
}) => (
  <div className={cx(styles.wrap, className)}>
    <p className={styles.label}>Returns</p>
    <div className={styles.values_wrap}>
      <p className={styles.percents}>{`+${percents}%`}</p>
      <p className={styles.balance}>{`+${balance}$`}</p>
    </div>
  </div>
);

export { RightSidebarReturns };
