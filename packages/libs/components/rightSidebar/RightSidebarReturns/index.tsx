import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type SizeType = 'normal' | 'small';

interface Props {
  type?: SizeType
  percents: string
  balance: string
  className?: string
}

const RightSidebarReturns: FC<Props> = ({
  percents,
  balance,
  className,
  type = 'normal',
}) => {
  const isSmall = type === 'small';
  
  return (
    <div className={cx(styles.wrap, className)}>
      {!isSmall && (
        <>
          <p className={styles.label}>Returns</p>
          <div className={styles.values_wrap}>
            <p className={styles.percents}>{`+${percents}%`}</p>
            <p className={styles.balance}>{`+${balance}$`}</p>
          </div>
        </>
      )}

      {type === 'small' && (
        <>
          <p className={cx(styles.label, { [styles.label_small]: isSmall })}>Returns</p>
          <p className={cx(styles.percents, { [styles.percents_small]: isSmall })}>{`+${percents}%`}</p>
          <p className={cx(styles.balance, { [styles.balance_small]: isSmall })}>{`+${balance}$`}</p>
        </>
      )}
    </div>
  );
};

export { RightSidebarReturns };
