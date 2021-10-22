import React, { FC, useState } from 'react';
import cx from 'classnames';
import { Tabs } from '../../inputs/Tabs';
import styles from './styles.module.scss';

interface Props {
  className?: string
}

const RightSidebarNavigation: FC<Props> = ({
  children,
  className,
}) => {
  const [active, setActive] = useState(0);
  
  return (
    <Tabs active={active} onChange={setActive}>
      <Tabs.Head className={cx(styles.wrap, className)} tabClassName={styles.button_tab}>
        <p className={cx(
          styles.tab,
          { [styles.is_active]: active === 0 },
        )}
        >
          Trade
        </p>
        <p className={cx(
          styles.tab,
          { [styles.is_active]: active === 1 },
        )}
        >
          Positions
        </p>
      </Tabs.Head>
      <Tabs.Content>
        {children}
      </Tabs.Content>
    </Tabs>
  );
};

export { RightSidebarNavigation };
