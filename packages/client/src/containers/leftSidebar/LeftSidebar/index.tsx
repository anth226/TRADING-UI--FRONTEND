import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Navigation } from '../../../constants/navigation/navigation';
import { HotAssets } from '../HotAssets';
import { Video } from '../Video';
import { Watchlist } from '../Watchlist';
import { News } from '../News';
import { Signals } from '../Signals';
import { Notifications } from '../Notifications';
import { Info } from '../Info';
import { OpenPosition } from '../OpenPosition';

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
    {activeNavigation === Navigation.News && <News onBack={onBack} />}
    {activeNavigation === Navigation.Signals && <Signals onBack={onBack} />}
    {activeNavigation === Navigation.Notifications && <Notifications onBack={onBack} />}
    {activeNavigation === Navigation.Stake && <Info onBack={onBack} />}
    {activeNavigation === Navigation.OpenPositions && <OpenPosition onBack={onBack} />}
  </div>
);

export { LeftSidebar };
