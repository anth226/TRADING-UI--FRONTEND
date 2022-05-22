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
  const style ={
    fontSize: 11,
    marginTop:5,
    fontFamily: 'Cabin',
  }
  const marks = {
    5:{ label: '10x', style},
    15:{ label: '20x', style},
    25:{ label: '25x', style},
    35:{ label: '50x', style},
    45:{ label: '100x', style},
    55:{ label: '150x', style},
    65:{ label: '200x', style},
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

      <div className={styles.slider_container}>
        <Slider
          activeDotStyle={{
            border:'1px solid rgba(127,115,24,0.76)',
            backgroundColor: '#f3de2c'
           }}//АктивныЕ точкИ
          railStyle={{backgroundColor:'#434c6c',
          height:'2px',
          marginTop:1
          }}//НЕ-Активный трек
          trackStyle={{backgroundColor:'#f3de2c'}}//Активный трек
          handleStyle={{
            backgroundColor: 'rgb(242, 222, 43)',
            border: 'solid 4px #f2de2be6',
            width:15,
            height:15.5,
            marginTop:-6,
          }}//Активная точкА
          dotStyle={{
            border:'1px solid rgba(255,255,255,0)',
            backgroundColor:'#434c6c'
          }}// НЕ-Активные точкИ

          min={0}
          max={70}
          step={null}
          marks={marks}
          defaultValue={45}
          draggableTrack={true}
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
