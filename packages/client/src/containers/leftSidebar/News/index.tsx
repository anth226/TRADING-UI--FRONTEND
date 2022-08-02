/* eslint-disable */
import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg'
import f from '../../../../../libs/assets/images/f.svg'
import forex from '../../../../../libs/assets/images/forex.svg'
import first from '../../../../../libs/assets/images/news/first.svg'
import second from '../../../../../libs/assets/images/news/second.svg'
import third from '../../../../../libs/assets/images/news/third.svg'
import fourth from '../../../../../libs/assets/images/news/fourth.svg'
import { NewsCard } from '@option-blitz/libs/components/leftSidebar/News';
import EconomicCalendar from './Calendar/economicCalendar';
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {DefaultSelect, OptionItem} from "@option-blitz/libs/components/inputs/DefaultSelect";
import { getNews } from '../../../store/news/actionCreators';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { useDispatch } from 'react-redux';
import { getLastQuote } from '../../../store/oracle/actionCreators';
import { PostMessage } from '../../../store/chat/actionCreators';
import axios from 'axios';

interface Props {
  onBack?: () => void
  isMobile?: boolean
}

const News: FC<Props> = ({
                            onBack,
                            isMobile,
                          }) => {

  const dispatch = useDispatch();

  useEffect(() => {
      // @ts-ignore
      dispatch(getNews());
      dispatch(PostMessage('s'));
    },
    []);

  const main = useShallowSelector(state => state.news.news.main?.stream)
  const loading = useShallowSelector(state => state.news.loading)

  const News = () =>{
    return main?.map(function(item: any) {
      return item.content.map(function(item2: any) {
        return <NewsCard
          key={item2.id}
          // icon={item2.icon}
          title={item2.provider?.displayName}
          image={item2.thumbnail.resolutions[0]?.url}
          description={item2.title}
          link={item2.clickThroughUrl?.url}
          isMobile={isMobile}
          publicData={item2.pubDate}
        />
      })
    })
  }

  const data = [
    {
      title: 'Forbs',
      icon: <img src={f} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={first} alt='img'  width='100%' />,
    },
    {
      title: 'FXStreet',
      icon: <img src={forex} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={second} alt='img'  width='100%' />,
    },
    {
      title: 'FXStreet',
      icon: <img src={forex} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={third} alt='img' width='100%' />,

    },
    {
      title: 'FXStreet',
      icon: <img src={forex} alt='icon' />,
      description:'Second-Richest Man in Mexico Says That Bitcoin Is His "Best Investment Ever"',
      image: <img src={fourth} alt='img' width='100%' />,
    },
  ]

const [calendar, setCalendar]=useState(false)

  const sortOptions: OptionItem [] = [
    { value: 'NEWS' },
    { value: 'ECONOMIC CALENDAR' },
  ];

function handlerChange() {
  calendar ? setCalendar(false) : setCalendar(true)
}

function news() {
  setCalendar(false)
}


  return (

        <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
          {!isMobile && (
              <div className={styles.title_wrap}>
                <p className={styles.title}>News</p>
                <button onClick={onBack} className={styles.arrow_wrap}>
                  <img src={arrow} alt='back' />
                </button>
              </div>
          )}
          {isMobile && (
              <div className={styles.header_small}>
              <div className={styles.title_wrap_mobile}>
                <FontIcon className={styles.icon} name={FontIconName.News} />
                <p className={styles.title_small}>News</p>
              </div>
              </div>
          )}

          {!isMobile && (
              <div className={styles.news}>
                <div onClick={news} className={!calendar?styles.active:styles.disable}>NEWS</div>
                <div className={calendar?styles.active:styles.disable} onClick={handlerChange}>ECONOMIC CALENDAR</div>
              </div>
          )}
          {
            isMobile && (
                  <div className={styles.mobile_select} >
                    <DefaultSelect
                        type={ 'small' }
                        onChange={handlerChange}
                        options={sortOptions}
                        defaultValue={sortOptions[0]}
                    />
                  </div>
              )
          }
          {calendar ?
            <EconomicCalendar />
            :
            <div className={isMobile ? styles.card_wrap_mobile : styles.card_wrap}>
              {/* {data.map((item) => ( */}
              {/*   <NewsCard */}
              {/*     icon={item.icon} */}
              {/*     title={item.title} */}
              {/*     image={item.image} */}
              {/*     description={item.description} */}
              {/*     link={item.title} */}
              {/*     isMobile={true} */}
              {/*   /> */}
              {/* ))} */}
              {loading ?
                'Loading...'
                :
                News()
              }
            </div>
          }

    </div>
  );
};
export { News };
