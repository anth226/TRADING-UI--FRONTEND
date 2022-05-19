/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss'
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import Button from '@option-blitz/libs/components/inputs/Button';
import { Letter, letterIcons } from '../../../../constants/letters/letters';


const OpenOrders = () => {
  const data = [
    {
      time: '20-12-26 17:45:45',
      size:'Size',
      sizeValue:'1.0 BTC',
      cost:'Cost',
      costValue:'$6000',
      takeProfit:'Take profit',
      takeProfitValue:'-',
      knock: 'Knock-out-price',
      knockValue: '$60.000.00',
      protection: 'Protection%',
      protectionValue: '10%',
      conditions: 'Conditions',
      conditionsValue: 'strike >= $70.000.000',
      tittleFirst: 'Trigger',
      tittleSecond: 'Take profit Trigger',
    }
  ]
  return (
    <div>
        <div className={styles.first_block}>
         <div className={styles.hide}> <Checkbox size={14} iconSize={7} checked={true} onCheck={()=>{}}/> HIDE OTHER PAIRS</div>
          <Button  className={styles.button_cancel_all}>CANCEL ALL</Button>
        </div>

      {data.map(item=>(
        <div>
          <div className={styles.title_wrap}>
            <div className={styles.flex}>
              <img src={letterIcons[Letter.L]} alt="letter" />
              <p className={styles.title}>BTCUSD</p>
            </div>
            <div className={styles.time}>{item.time}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.name}>{item.tittleFirst}</div>
          </div>
          <div className={styles.item} >
            <p className={styles.item_label}>{item.size}</p>
            <p className={styles.item_value}>{item.sizeValue}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.item_label}>{item.cost}</p>
            <p className={styles.item_value}>{item.costValue}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.item_label}>{item.takeProfit}</p>
            <p className={styles.item_value}>{item.takeProfitValue}</p>
          </div>
          <div className={styles.item} >
            <p className={styles.item_label}>{item.knock}</p>
            <p className={styles.item_value}>{item.knockValue}</p>
          </div>
          <div className={styles.item} >
            <p className={styles.item_label}>{item.protection}</p>
            <p className={styles.item_value}>{item.protectionValue} BTC</p>
          </div>
          <div className={styles.item} >
            <p className={styles.item_label}>{item.conditions} fee</p>
            <p className={styles.item_value}>{item.conditionsValue}</p>
          </div>

          <Button  className={styles.button_cancel}>CANCEL</Button>
          <hr className={styles.hr}/>

        </div>
        )
      )}

      {data.map(item=>(
      <div>
        <div className={styles.title_wrap}>
          <div className={styles.flex}>
            <img src={letterIcons[Letter.L]} alt="letter" />
            <p className={styles.title}>BTCUSD</p>
          </div>
          <div className={styles.time}>{item.time}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.name}>{item.tittleSecond}</div>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>{item.size}</p>
          <p className={styles.item_value}>{item.sizeValue}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.item_label}>{item.cost}</p>
          <p className={styles.item_value}>{item.costValue}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.item_label}>{item.takeProfit}</p>
          <p className={styles.item_value}>{item.takeProfitValue}</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>{item.knock}</p>
          <p className={styles.item_value}>{item.knockValue}</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>{item.protection}</p>
          <p className={styles.item_value}>{item.protectionValue} BTC</p>
        </div>
        <div className={styles.item} >
          <p className={styles.item_label}>{item.conditions} fee</p>
          <p className={styles.item_value}>{item.conditionsValue}</p>
        </div>

        <Button  className={styles.button_cancel}>CANCEL</Button>
        <hr className={styles.hr}/>

      </div>
      )
      )}

    </div>
  );
};

export default OpenOrders;
