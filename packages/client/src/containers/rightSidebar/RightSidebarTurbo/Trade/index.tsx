/* eslint-disable */
import React, { useState } from 'react';
import styles from './styles.module.scss'
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Button from '@option-blitz/libs/components/inputs/Button';
import Market from './Market';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Mark from './Mark/index';

const TurboTabTrade = () => {
  const [activeItem, setActiveItem] = useState(1)
  const [activeButton, setActiveButton] = useState('short')


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
        return '404'
    }
  }
  const [mark, SetMark]=useState<number| number[]>(45)

  const marksArray = [5, 15, 25, 35, 45, 55, 65];

  const getMarks = () => {
    const obj = {}
    for (const key of marksArray){
      // @ts-ignore
      obj[key]=<Mark active={mark===key} id={key}/>
    }
    return obj
  }

  return (
    <div>

      <div className={styles.funding}>FUNDING RATE/BH</div>
      <div className={styles.funding_value}>{fundingValue}</div>
      <div className={styles.button_wrap}>
        <Button
          className={styles.button}
          color={activeButton === 'long' ? 'primary' : 'transparent_primary'}
          onClick={()=>{setActiveButton('long')}}
        >
          <FontIcon className={styles.call_arrow} name={FontIconName.ArrowBigRight} />
          <p>long</p>
        </Button>
        <Button
          className={styles.button}
          color={activeButton === 'short' ? 'secondary' : 'transparent_secondary'}
          onClick={()=>{setActiveButton('short')}}
        >
          <FontIcon className={styles.put_arrow} name={FontIconName.ArrowBigRight} />
          <p>short</p>
        </Button>
      </div>
      <div className={styles.leverage}>LEVERAGE</div>

      <div className={styles.slider_container}>
        <Slider
          className={styles.slider}
          activeDotStyle={{
            border:'1px solid rgba(127,115,24,0.76)',
            backgroundColor: '#f2de2be6'
            // backgroundColor: '#f3de2c'
           }}//АктивныЕ точкИ
          railStyle={{backgroundColor:'#434c6c',
          height:'2px',
          marginTop:1
          }}//НЕ-Активный трек
          trackStyle={{backgroundColor:'#f3de2c'}}//Активный трек
          handleStyle={{
            backgroundColor: 'rgba(242,222,43,0.5)',
            border: 'solid 4px #f2de2be6',
            width:15,
            height:15.5,
            marginTop:-6,
          }}//Активная точкА
          dotStyle={{
            border:'1px solid rgba(255,255,255,0)',
            backgroundColor:'#434c6c'
          }}// НЕ-Активные точкИ
          onChange={(value)=>{SetMark(value)}}
          min={0}
          max={70}
          step={null}
          marks={getMarks()}
          defaultValue={mark}
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
