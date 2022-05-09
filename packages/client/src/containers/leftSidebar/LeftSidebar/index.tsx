import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Navigation } from '../../../constants/navigation/navigation';
import { HotAssets } from '../HotAssets';
import { Video } from '../Video';
import { Watchlist } from '../Watchlist';

interface Props {
  activeNavigation?: Navigation
  onBack: () => void
}

const LeftSidebar: FC<Props> = ({
  activeNavigation,
  onBack,
}) => (
  <div className={styles.wrap}>
    {activeNavigation === Navigation.HotAssets && <HotAssets onBack={onBack} />}
    {activeNavigation === Navigation.VideoTutorials && <Video onBack={onBack} />}
    {activeNavigation === Navigation.WatchList && <Watchlist onBack={onBack} />}
  </div>
);

export { LeftSidebar };
