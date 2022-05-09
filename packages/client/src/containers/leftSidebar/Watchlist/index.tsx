/* eslint-disable */
import React, { FC, useState } from 'react';
import { HotAssetsCard } from '@option-blitz/libs/components/leftSidebar/HotAssetsCard';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { MobileViewMode, ViewMode } from '@option-blitz/libs/components/common/MobileViewMode';
import styles from './styles.module.scss';
import { useHotAssetsHandlers } from '../../../hooks/leftSidebar/useHotAssetsHandlers';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import { WatchlistCard } from '@option-blitz/libs/components/leftSidebar/Watchlist';
import arrowBack from '../../../../../libs/assets/images/arrow-back.svg'
import { divide } from 'ramda';
import { LoginModal } from '../../Modals/LoginModal';
import { CreatePriceAlert } from '../../Modals/CreatePriceAlert';
import { PriceAlert } from '../../Modals/PriceAlert';

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

  const [modalVisible, setModalVisible] = useState(false);
  const [testAlert, setTestAlert]=useState(false)
  const handleChange = () => {
    setModalVisible(true)
  }
  const testChange = () => {
    setTestAlert(true)
  }
  return (
    <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
      {!isMobile && (
        <div className={styles.title_wrap}>
          <p className={styles.title}>
            <FontIcon className={styles.iconArrowBack} size={10} name={FontIconName.ArrowLeftBold} />
            Alerts
          </p>
          <button onClick={onBack} className={styles.arrow_wrap}>
            <img src={arrowBack} alt='back' />
          </button>
        </div>
      )}
      {isMobile && (
        <div className={styles.header_small}>
          <div className={styles.title_wrap_mobile}>
            <FontIcon className={styles.icon} name={FontIconName.Binocular} />
            <p className={styles.title_small}>Watchlist</p>
          </div>

          <MobileViewMode mode={viewMode} modeSelect={setViewMode} />
        </div>
      )}

      <div className={isMobile ? styles.mobile_select : styles.select}>
        <Button className={styles.addAlert} onClick={handleChange}>ADD NEW PRICE ALERT</Button>
        <Button className={styles.cancelAlert}>CANCEL ALL ALERTS</Button>
      </div>
      <div>

      </div>
      <div>
        <div className={styles.symbol}>
            <div>Symbol</div>
            <div>Condition</div>
            <div>Price</div>
        </div>
        <hr className={styles.hr}/>

        <CreatePriceAlert active={modalVisible} setActive={setModalVisible}/>
        <Button className={styles.testAlert} onClick={testChange}>Test price alert </Button>
        <PriceAlert active={testAlert} setActive={setTestAlert}/>
      </div>
    </div>
  );
};
export { Watchlist };
