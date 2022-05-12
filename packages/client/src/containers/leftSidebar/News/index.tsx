/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg'
import f from '../../../../../libs/assets/images/f.svg'
import forex from '../../../../../libs/assets/images/forex.svg'
import first from '../../../../../libs/assets/images/news/first.png'
import second from '../../../../../libs/assets/images/news/second.png'
import third from '../../../../../libs/assets/images/news/third.png'
import fourth from '../../../../../libs/assets/images/news/fourth.png'
import { NewsCard } from '@option-blitz/libs/components/leftSidebar/News';
import EconomicCalendar from './Calendar/economicCalendar';

interface Props {
  onBack?: () => void
  isMobile?: boolean
}

const News: FC<Props> = ({
                            onBack,
                            isMobile,
                          }) => {
  const data = [
    {
      title: 'Forbs',
      icon: <img src={f} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={first} alt='img' />,
    },
    {
      title: 'FXStreet',
      icon: <img src={forex} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={second} alt='img' />,
    },
    {
      title: 'FXStreet',
      icon: <img src={forex} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={third} alt='img' />,

    },
    {
      title: 'FXStreet',
      icon: <img src={forex} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={fourth} alt='img' />,
    },
  ]

const [calendar, setCalendar]=useState(false)
function handlerChange() {
  setCalendar(true)
}
function news() {
  setCalendar(false)
}
  return (

        <div className={styles.wrap}>
          <div className={styles.title_wrap}>
            <p className={styles.title}>News</p>
            <button onClick={onBack} className={styles.arrow_wrap}>
              <img src={arrow} alt='back' />
            </button>
          </div>
          <div className={styles.news}>
            <div onClick={news} className={!calendar?styles.active:styles.disable}>NEWS</div>
            <div className={calendar?styles.active:styles.disable} onClick={handlerChange}>ECONOMIC CALENDAR</div>
          </div>
          {calendar ? 
            <EconomicCalendar />
            :
          <div className={styles.card_wrap}>
            {data.map((item) => (
              <NewsCard
                icon={item.icon}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>

      }
    </div>
  );
};
export { News };
