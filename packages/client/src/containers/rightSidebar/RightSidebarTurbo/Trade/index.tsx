/* eslint-disable */
import React, { useState } from 'react';
import styles from './styles.module.scss'
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Button from '@option-blitz/libs/components/inputs/Button';
import Market from './Market';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


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
  const marks = {
    10: '10х',
    30: '20х',
    60: '25х',
    90: '50х',
    120: '100x',
    150: '150x',
    180: '200х',
    // 500: {
    //   style: {
    //     color: 'red',
    //   },
    //   label: <strong>100°C</strong>,
    // },
  };

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

      <div className={styles.slider_container}>
        <Slider
          activeDotStyle={{borderColor:'rgba(127,115,24,0.76)', backgroundColor: '#f3de2c'}}
          railStyle={{backgroundColor:'#434c6c'}}
          trackStyle={{backgroundColor:'#f3de2c'}}
          min={0}
          max={200}
          step={null}
          marks={marks}
          defaultValue={150}
        />
      </div>

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
