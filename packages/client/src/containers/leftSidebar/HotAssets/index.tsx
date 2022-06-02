import React, { FC, useState } from 'react';
import { HotAssetsCard } from '@option-blitz/libs/components/leftSidebar/HotAssetsCard';
import { DefaultSelect } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { MobileViewMode, ViewMode } from '@option-blitz/libs/components/common/MobileViewMode';
import arrow from '@option-blitz/libs/assets/images/arrow-back.svg';
import styles from './styles.module.scss';
import { useHotAssetsHandlers } from '../../../hooks/leftSidebar/useHotAssetsHandlers';

interface Props {
  onBack?: () => void
  isMobile?: boolean
}

const HotAssets: FC<Props> = ({
  onBack,
  isMobile,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>(isMobile ? ViewMode.Grid : ViewMode.Column);
  const {
    cardItems,
    sortOptions,
    filterOptions,
    filterChange,
    sortChange,
  } = useHotAssetsHandlers();
  
  return (
    <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
      {!isMobile && (
        <div className={styles.title_wrap}>
          <p className={styles.title}>Hot assets</p>
          <button onClick={onBack} className={styles.arrow_wrap}>
            <img src={arrow} alt="back" />
          </button>
        </div>
      )}
      {isMobile && (
        <div className={styles.header_small}>
          <div className={styles.title_wrap_mobile}>
            <FontIcon className={styles.icon} name={FontIconName.Fire} />
            <p className={styles.title_small}>Hot assets</p>
          </div>

          <MobileViewMode mode={viewMode} modeSelect={setViewMode} />
        </div>
      )}
      
      <div className={isMobile ? styles.mobile_select : styles.select}>
        <DefaultSelect
          type={isMobile ? 'small' : 'normal'}
          // title="Sort by"
          onChange={sortChange}
          options={sortOptions}
          defaultValue={sortOptions[0]}
        />
      </div>
      <div className={isMobile ? styles.mobile_select : styles.select}>
        <DefaultSelect
          className={isMobile ? styles.mobile_select : styles.select}
          type={isMobile ? 'small' : 'normal'}
          onChange={filterChange}
          options={filterOptions}
          defaultValue={filterOptions[0]}
        />
      </div>
      <div className={viewMode === ViewMode.Grid ? styles.gird_card_wrap : styles.card_wrap}>
        {cardItems.map((item) => (
          <HotAssetsCard
            type={viewMode === ViewMode.Grid ? 'small' : 'normal'}
            key={item.key}
            className={styles.card}
            icon={item.icon}
            title={item.title}
            firstValue="$100"
            secondValue="+9.06"
          />
        ))}
      </div>
    </div>
  );
};
export { HotAssets };
