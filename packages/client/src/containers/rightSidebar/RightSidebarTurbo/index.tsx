/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import TurboTabTrade from './Trade';
import TurboTabPositions from './Positions';
import OpenOrders from './OpenOrders/OpenOrders';

const RightSidebarTurbo: FC = () => {

  const [activeItem, setActiveItem] = useState(1);

  const navigationRight = [
    {
      name: 'TRADE',
    },
    {
      name: 'POSITION',
    },
    {
      name: 'OPEN ORDERS',
    },
  ];

  const rightTab = () => {
    switch (activeItem) {
      case 1:
        return <TurboTabTrade />;
      case 2:
        return <TurboTabPositions />;
      case 3:
        return <OpenOrders/>;
      default:
        return <TurboTabTrade />;
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.navigation}>
        {navigationRight.map((link, i) => (
          <div className={activeItem === i + 1 ? styles.navItemActive : styles.navItem}
               onClick={() => setActiveItem(i + 1)}>
            <div>{link.name}</div>
          </div>
        ))}
      </div>
      <div>{rightTab()}</div>
    </div>
  );
};

export { RightSidebarTurbo };
