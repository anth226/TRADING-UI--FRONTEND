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
import { Notifications } from '../leftSidebar/Notifications';
import { Info } from '../leftSidebar/Info';
import { OpenPosition } from '../leftSidebar/OpenPosition';
import { Signals } from '../leftSidebar/Signals';
import { Staking } from '../../pages/Staking';
import { Analytics } from '../leftSidebar/Analytics/Analytics';
import AffiliateDashboard from '../../pages/Promo_Code/Affiliate_Campaigns/Dashboard';
import AffiliateCampaigns from '../../pages/Promo_Code/Affiliate_Campaigns';
import AffiliateBLX from '../../pages/Promo_Code/BLX_Token';
import Promocode from '../../pages/Promo_Code';

const MobileNavigation: FC = () => {
  const activeItem = useShallowSelector(selectNavigationProp('activeNavigation'));
  return (
    <div className={styles.wrap}>
      {activeItem === Navigation.HotAssets && <HotAssets isMobile />}
      {activeItem === Navigation.WatchList && <Watchlist isMobile />}
      {activeItem === Navigation.VideoTutorials && <Video isMobile />}
      {activeItem === Navigation.News && <News isMobile />}
      {activeItem === Navigation.Chat && <Chat isMobile /> }
      {activeItem === Navigation.Notifications && <Notifications isMobile /> }
      {activeItem === Navigation.Info && <Info isMobile /> }
      {activeItem === Navigation.OpenPositions && <OpenPosition isMobile /> }
      {activeItem === Navigation.Signals && <Signals isMobile /> }
      {activeItem === Navigation.Stake && <Staking active={1} /> }
      {activeItem === Navigation.BLX && <Staking active={3} />}
      {activeItem === Navigation.MyAffiliateProg && <AffiliateDashboard isMobile />}
      {activeItem === Navigation.PromotionalTools && <AffiliateCampaigns isMobile />}
      {activeItem === Navigation.Statistics && <AffiliateBLX isMobile />}
      {activeItem === Navigation.Payments && <Promocode isMobile />}
      {activeItem === Navigation.UnStake && <Staking active={2} isMobile />}
      {activeItem === Navigation.Analytics && <Analytics /> }
    </div>
  );
};

export { MobileNavigation };
