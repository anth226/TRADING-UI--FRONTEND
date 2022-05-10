/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  title?: string
  act?: string
  impact?: string
  prev?: string
  country?: string
  done?:any
  flag?:any
}

const CalendarCard: FC<Props>= ({title,act,impact,prev,country,done,flag
}) => {
  return (
    <div>
      <div className={styles.table}>
        <div className={styles.first}>
          <div>Done</div>
         <div>{done}</div>
        </div>
        <div className={styles.second}>{title}
          <div className={styles.row}>
            <div className={styles.act}>Act {act}</div>
            <div className={styles.impact}>Impact {impact}</div>
            <div className={styles.prev}>Prev {prev}</div>
          </div>
        </div>
        <div className={styles.third}>{country}
          <div><img src={flag} alt='flag' /></div>
        </div>
      </div>
      <hr className={styles.hr}/>
    </div>
  );
};

export default CalendarCard;
