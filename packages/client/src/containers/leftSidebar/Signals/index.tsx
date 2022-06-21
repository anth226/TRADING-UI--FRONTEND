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
import { SignalsTab } from './SignalsTab/SignalsTab';

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}

const Signals: FC<Props> = ({
                              onBack,
                              isMobile,
                            }) => {

  const {
    filterOptions,
    filterChange,
  } = useHotAssetsHandlers();
  return (
    <div className={isMobile ? styles.wrapMobile : styles.wrap}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>Signals</p>
        <button onClick={onBack} className={ isMobile ? styles.none : styles.arrow_wrap}>
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
      <div className={isMobile ? styles.areasMobile : styles.areas}>
        <DefaultSelect
          className={isMobile ? styles.selectMobile : styles.select}
          onChange={filterChange}
          options={filterOptions}
          defaultValue={filterOptions[0]}
        />
        <div className={isMobile ? styles.selectMobile : styles.label}>
          <TextInput
            left={<FontIcon size={14} className={styles.iconSearch} name={FontIconName.Search} />}
            type={'text'}
            placeholder={'Search'}
            className={styles.input}
          />
        </div>
      </div>
    <SignalsTab/>


    </div>
  );
};
export { Signals };

