/* eslint-disable */
import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';
import { Tabs } from '../../inputs/Tabs';
import styles from './styles.module.scss';


interface Props {
  className?: string
  isMobile?: boolean
}

interface Tab {
  id: number
  label: string
}

// const tabs: Tab[] = [
//   { id: 0, label: 'Trade' },
//   { id: 1, label: 'Positions' },
// ];

const mobileTabs: Tab[] = [
  { id: 0, label: 'Chart' },
  { id: 1, label: 'Trade' },
  { id: 2, label: 'Positions' },
    { id: 3, label: 'Open orders' },
];

const RightSidebarTurboNavigation: FC<Props> = ({
  children,
  className,
  isMobile = false,
}) => {
  const [active, setActive] = useState(0);
  
  const getTabsNode = useCallback((t: Tab[]) => (
    t.map((tab) => (
      <p
        key={tab.id}
        className={cx(
          styles.tab,
          { [styles.is_active]: active === tab.id },
        )}
      >
        {tab.label}
      </p>
    ))), [active]);
  
  const getMobileTabsNode = useCallback((t: Tab[]) => t.map((tab) => (
    <p
      key={tab.id}
      className={cx(
        styles.mobile_tab,
        { [styles.mobile_tab_active]: active === tab.id },
      )}
    >
      {tab.label}
    </p>
  )), [active]);
  
  return (
    <Tabs active={active} onChange={setActive}>
      <Tabs.Content>
        {children}
      </Tabs.Content>
      {isMobile && (
        <Tabs.Head className={cx(styles.wrap, className)} tabClassName={styles.mobile_button_tab}>
          {getMobileTabsNode(mobileTabs)}
        </Tabs.Head>
      )}
    </Tabs>
  );
};

export { RightSidebarTurboNavigation };
