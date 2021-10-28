import React, { FC } from 'react';
import { HotAssetsCard } from '@option-blitz/libs/components/leftSidebar/HotAssetsCard';
import { DefaultSelect } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import styles from './styles.module.scss';
import { useHotAssetsHandlers } from '../../../hooks/leftSidebar/useHotAssetsHandlers';

interface Props {
  onBack?: () => void
}

const HotAssets: FC<Props> = ({
  onBack,
}) => {
  const {
    cardItems,
    sortOptions,
    filterOptions,
    filterChange,
    sortChange,
  } = useHotAssetsHandlers();
  
  return (
    <div className={styles.wrap}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>Hot assets</p>
        <button onClick={onBack} className={styles.arrow_wrap}>
          <FontIcon className={styles.arrow} size={8} name={FontIconName.ArrowRight} />
          <FontIcon className={styles.arrow} size={8} name={FontIconName.ArrowRight} />
        </button>
      </div>

      <div className={styles.select}>
        <DefaultSelect
          onChange={sortChange}
          options={sortOptions}
          defaultValue={sortOptions[0]}
        />
      </div>
      <div className={styles.select}>
        <DefaultSelect
          onChange={filterChange}
          options={filterOptions}
          defaultValue={filterOptions[0]}
        />
      </div>
      <div className={styles.card_wrap}>
        {cardItems.map((item) => (
          <HotAssetsCard
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
