/* eslint-disable */
import React, { useState } from 'react';
import styles from './styles.module.scss'
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Button from '@option-blitz/libs/components/inputs/Button';
import Market from './Market';


const TurboTabTrade = () => {
  const [activeItem, setActiveItem] = useState(1)
  const [activeButton, setactiveButton] = useState('short')


  const fundingValue = '0.015%';

  const navigationRight = [
    {
      name: 'MARKET',
    },
    {
      name: 'STOP',
    },
  ];

  const whichTab = () => {
    switch (activeItem) {
      case 1:
        return <Market/>
      case 2:
        return 'Stop'
      default:
        return '111'
    }
  }

  return (
    <div>

      <div className={styles.funding}>FUNDING RATE/BH</div>
      <div className={styles.funding_value}>{fundingValue}</div>

      <div className={styles.button_wrap}>
        <Button
          className={styles.button}
          color={activeButton === 'long' ? 'primary' : 'transparent_primary'}
        >
          <FontIcon className={styles.call_arrow} name={FontIconName.ArrowBigRight} />
          <p>long</p>
        </Button>
        <Button
          className={styles.button}
          color={activeButton === 'short' ? 'secondary' : 'transparent_secondary'}
        >
          <FontIcon className={styles.put_arrow} name={FontIconName.ArrowBigRight} />
          <p>short</p>
        </Button>
      </div>
      <div className={styles.leverage}>LEVERAGE</div>
      <div className={styles.navigation}>
        {navigationRight.map((link, i) => (
          <div className={activeItem === i + 1 ? styles.navItemActive : styles.navItem}
               onClick={() => setActiveItem(i + 1)}>
            <div>{link.name}</div>
          </div>
        ))}
      </div>
      <div>{whichTab()}</div>
    </div>
  );
};

export default TurboTabTrade;
