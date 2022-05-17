/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import hotAssetsDiagram from '@option-blitz/libs/assets/images/hot_assets_diagram.svg';
import ETH from '../../../../../libs/assets/images/coins/ETH.svg'
import volatility from '../../../../../libs/assets/images/Turbo/volatility.png'
import lineGreen from '../../../../../libs/assets/images/Turbo/lineGreen.svg'
import lineYellow from '../../../../../libs/assets/images/Turbo/lineYellow.svg'
import linePink from '../../../../../libs/assets/images/Turbo/linePink.svg'

const TurboTrader = () => {
  const data = [
    {
      name: 'BTC',
      select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
    },
    {
      name: 'ETH',
      select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
    },
    {
      name: 'WTI',
      select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
    },
    {
      name: 'XAG',
      select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
    },
    {
      name: 'XAU',
      select:<Checkbox size={12} checked={false} onCheck={() => {}} ></Checkbox>,
    },

  ];
  const dataVolatility = [
    {
      name: 'BTC',
      select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
      line:lineGreen,
    },
    {
      name: 'ETH',
      select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
      line:lineYellow,
    },
    {
      name: 'WTI',
      select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
      line:linePink,
    },
    {
      name: 'XAG',
      select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
      line:linePink,
    },
    {
      name: 'XAU',
      select:<Checkbox size={12} checked={true} onCheck={() => {}} ></Checkbox>,
      line:linePink,
    },

  ];
  return (

      <div className={styles.main_container}>
        <div style={{display:'flex'}}>

          <div className={styles.coin_container}>{data.map(item=>(
            <div className={styles.column_select}>
            <div>{item.select}</div>
            <div className={styles.coin_name}>{item.name}</div>
            </div>
          ))}</div>

          <div className={styles.wrap}>
            <div className={styles.title_wrap}>
              <div className={styles.coin_wrap}>
                <img src={ETH} alt="coin" />
                <p className={styles.title}>ETH</p>
              </div>

              <div className={styles.info_wrap}>
                <p className={styles.first_value}>$1000.00</p>
                <span className={styles.second_value}>+9.0%</span>
              </div>
            </div>
            <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />

          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
          <div>
            <img className={styles.diagram} src={volatility} alt="volatility" />
          </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>{dataVolatility.map(item=>(
              <div className={styles.column_select}>
                <img src={item.line} alt='' />
                <div className={styles.coin_name}>{item.name}</div>
                <div>{item.select}</div>
              </div>
            ))}</div>
        </div>


      </div>

  );
};

export default TurboTrader;
