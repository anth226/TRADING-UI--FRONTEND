/* eslint-disable */
import React, { FC, useState } from 'react';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { MobileViewMode, ViewMode } from '@option-blitz/libs/components/common/MobileViewMode';
import styles from './styles.module.scss';
import { useHotAssetsHandlers } from '../../../hooks/leftSidebar/useHotAssetsHandlers';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import { WatchlistCard } from '@option-blitz/libs/components/leftSidebar/Watchlist';
import arrowBack from '../../../../../libs/assets/images/arrow-back.svg'
import Alert from './alert';

interface Props {
  onBack?: () => void
  isMobile?: boolean
}

const Watchlist: FC<Props> = ({
  onBack,
  isMobile,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>(isMobile ? ViewMode.Grid : ViewMode.Column);
  const {
    cardItems,
  } = useHotAssetsHandlers();

  const [show, setShow] = useState(false)

  function showAlert() {
    setShow(true)
  }

  return (

    <div>
      {show?
        <Alert close={onBack} back={setShow}/>
        :
      <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
        {!isMobile && (
          <div className={styles.title_wrap}>
            <p className={styles.title}>Watchlist</p>
            <button onClick={onBack} className={styles.arrow_wrap}>
              <img src={arrowBack} alt='back' />
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
          <TextInput
            left={<FontIcon size={14}  className={styles.iconSearch} name={FontIconName.Search} />}
            type={'text'}
            placeholder={'Search'}
            className={styles.input}
          />
          <Button className={styles.price} onClick={showAlert}>
            <FontIcon  size={17} className={styles.iconBinocular} name={FontIconName.Binocular} />
            PRICE ALERT</Button>
        </div>
        <div>

        </div>
        <div className={viewMode === ViewMode.Grid ? styles.gird_card_wrap : styles.card_wrap}>
          {cardItems.map((item) => (
            <WatchlistCard
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
      </div> }
    </div>



  );
};
export { Watchlist };
