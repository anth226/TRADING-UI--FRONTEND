/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import { DefaultSelect } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { useHotAssetsHandlers } from '../../../hooks/leftSidebar/useHotAssetsHandlers';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import eur from '../../../../../libs/assets/images/countries/EUR-USD.png';
import sentiment from '../../../../../libs/assets/images/sentiment.png';

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}

const Signals: FC<Props> = ({
                              onBack,
                              isMobile,
                            }) => {

  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  const {
    filterOptions,
    filterChange,
  } = useHotAssetsHandlers();
  const graphic = <svg width='80' height='25' viewBox='0 0 80 25' fill='none'
                       xmlns='http://www.w3.org/2000/svg'>
    <path opacity='1'
          d='M60.2898 15.6345H65.3358L79.2122 8.934L79.2122 24.3896H0L8.8212 7.7551L14.3717 2.69334L20.4269 0H27.4912L34.3032 2.69334L40.6107 0L54.487 6.04358L60.2898 15.6345Z'
          fill='url(#paint0_linear_1893_1035)' />
    <defs>
      <linearGradient id='paint0_linear_1893_1035' x1='47.8596' y1='16.3749' x2='47.8596' y2='28'
                      gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00CD86' />
        <stop offset='1' stop-color='#00CD86' stop-opacity='0' />
      </linearGradient>
    </defs>
  </svg>;
  return (
    <div className={styles.wrap}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>Signals</p>
        <button onClick={onBack} className={styles.arrow_wrap}>
          <img src={arrow} alt='back' />
        </button>
      </div>
      <div className={styles.descrtiprion}>
        Latest technical overviews and analysis of your selected
        instruments, based on recent
        market activity. The information featured, shown for specific intervals, is a comprehensive
        summary derived from simple and exponential moving averages along with key technical
        indicators.
      </div>
      <div className={styles.areas}>
        <DefaultSelect
          className={styles.select}
          onChange={filterChange}
          options={filterOptions}
          defaultValue={filterOptions[0]}
        />
        <div className={styles.label}>
          <TextInput
            left={<FontIcon size={14} className={styles.iconSearch} name={FontIconName.Search} />}
            type={'text'}
            placeholder={'Search'}
            className={styles.input}
          />
        </div>
      </div>
      {data.map(item => (
        <div key={item.id}>
          <div className={styles.table}>
            <div>
              <div className={styles.top}>
                Asset
              </div>
              <div className={styles.col}>
                <div className={styles.fl}>
                  <img src={eur} alt='icon' />
                  <div>
                    <div className={styles.euro}>EUR/USD</div>
                    <div className={styles.price}>1.282815</div>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className={styles.top}>
                Chart
              </div>
              <div className={styles.col}>
                <div className={styles.fl}>
                  {graphic}
                </div>
              </div>

            </div>
            <div>
              <div className={styles.top}>
                Sentiment
              </div>
              <div className={styles.col}>
                <div className={styles.fl}>
                  <div className={styles.point}></div>
                  <div className={styles.euro}>10 Online</div>
                </div>
                <img src={sentiment} alt='' />
              </div>
            </div>
            <div>
              <div className={styles.top}>
                Type
              </div>
              <div className={styles.typeBox}>
                <div className={styles.text}>Moving Average:</div>
                <div className={styles.text}>Indicators:</div>
                <div className={styles.summary}>Summary:</div>
              </div>
            </div>
            <div>
              <div className={styles.top}>
                5 min
              </div>
              <div className={styles.col}>
                <div className={styles.text}>Strong Buy</div>
                <div className={styles.text}>Strong Buy</div>
                <div className={styles.strongBuy}>Strong Buy</div>
              </div>
            </div>
            <div>
              <div className={styles.top}>
                15 Minutes
              </div>
              <div className={styles.col}>
                <div className={styles.text}>Strong Buy</div>
                <div className={styles.text}>Strong Buy</div>
                <div className={styles.strongBuy}>Strong Buy</div>
              </div>
            </div>

            <div>
              <div className={styles.top}>
                Hourly
              </div>
              <div className={styles.col}>
                <div className={styles.text}>Neutral</div>
                <div className={styles.text}>Strong Buy</div>
                <div className={styles.strongBuy}>Buy</div>
              </div>
            </div>

            <div>
              <div className={styles.top}>
                Daily
              </div>
              <div className={styles.col}>
                <div className={styles.text}>Sell</div>
                <div className={styles.text}>Strong Sell</div>
                <div className={styles.strongSell}>Strong Sell</div>
              </div>
            </div>

            <div>
              <div className={styles.top}>
                Watchlist
              </div>
              <div className={styles.iconCenter}>
                <FontIcon name={FontIconName.Plus} size={17} />
              </div>
            </div>

            <div>
              <div className={styles.top}>
                Trade Now
              </div>
              <div className={styles.iconCenter}>
                <FontIcon name={FontIconName.ArrowRightBold} size={17} />
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
        </div>
      ))}


    </div>
  );
};
export { Signals };

