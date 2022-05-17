/* eslint-disable */
import React, { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import GameHistoryTab from '../../components/turboRush/GameHistoryTab/GameHistoryTab';
import turboGame from '../../../../libs/assets/images/Turbo/turboGame.png'
import styles from './styles.module.scss'
import TurboPositions from '../../components/turboRush/Positions/TurboPositions';
import TurboTrade from '../../components/turboRush/Trade/TurboTrade';
import TurboTrader from '../../components/turboRush/Trader/TurboTrader';

const TurboRush = () => {

  const [activeItem, setActiveItem] = useState(1)
  const [activeItemBottom, setActiveItemBottom] = useState(1)


  const navigationRight = [
    {
      name: 'TRADE',
    },
    {
      name: 'POSITIONS',
    },
  ]
  const navigationBottom =[
    {
      name:'TRADER',
    },
    {
      name:'ID',
    },
    {
      name:'BET',
    },
    {
      name:'RESULT',
    },
    {
      name:'PAYOUT',
    },
    {
      name:'LEVEL',
    },
    {
      name:'TX',
    },
  ]

  const rightTab = () => {
    switch (activeItem) {
      case 1:
        return <TurboTrade/>
      case 2:
        return <TurboPositions/>
      default:
        return <TurboTrade/>
    }
  }

  const bottomTab = () => {
    switch (activeItemBottom) {
      case 1:
        return <TurboTrader/>
      default:
        return <TurboTrader/>
    }
  }

  return (
    <MainLayout>
    <div className={styles.main}>
      <div className={styles.column}>
        <div className={styles.main}>
        <GameHistoryTab/>
        <img className={styles.img} src={turboGame} alt='image' />
        </div>
        <div>
          <div className={styles.navigation}>
            {navigationBottom.map((link, i) => (
              <div className={activeItemBottom === i + 1 ? styles.navItemActiveBottom : styles.navItemBottom}
                   onClick={() => setActiveItemBottom(i + 1)}>
                <div>{link.name}</div>
              </div>
            ))}
          </div>
          <div>{bottomTab()}</div>
        </div>
      </div>

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

    </div>
      </MainLayout>
  );
};

export default TurboRush;
