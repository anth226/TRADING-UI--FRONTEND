/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import { DefaultSelect } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { useHotAssetsHandlers } from '../../../hooks/leftSidebar/useHotAssetsHandlers';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import eur from '../../../../../libs/assets/images/countries/EUR-USD.svg';
import sentiment from '../../../../../libs/assets/images/sentiment.png';
import chart from '../../../../../libs/assets/images/SignalsMiniChart.svg'

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
      <div className={styles.scroll}>
        {data.map(item => (
          <div key={item.id} >
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
                    <img src={chart} alt='' />
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



    </div>
  );
};
export { Signals };

