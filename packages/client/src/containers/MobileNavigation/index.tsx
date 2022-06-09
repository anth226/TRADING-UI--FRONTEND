import React, { FC } from 'react';
import { useShallowSelector } from '../../hooks/useShallowSelector';
import { selectNavigationProp } from '../../store/navigation/selectors';
import { HotAssets } from '../leftSidebar/HotAssets';
import { Navigation } from '../../constants/navigation/navigation';
import styles from './styles.module.scss';
import { Watchlist } from '../leftSidebar/Watchlist';
import { Video } from '../leftSidebar/Video';
import { News } from '../leftSidebar/News';
import { Chat } from '../leftSidebar/Chat';

const MobileNavigation: FC = () => {
  const activeItem = useShallowSelector(selectNavigationProp('activeNavigation'));
  return (
    <div className={styles.wrap}>
      {activeItem === Navigation.HotAssets && <HotAssets isMobile />}
      {activeItem === Navigation.WatchList && <Watchlist isMobile />}
      {activeItem === Navigation.VideoTutorials && <Video isMobile />}
      {activeItem === Navigation.News && <News isMobile />}
      {activeItem === Navigation.Chat && <Chat isMobile /> }

    </div>
  );
};

export { MobileNavigation };
