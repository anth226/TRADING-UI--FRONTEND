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
import { Chat } from '../Chat';
import AffiliateBLX from '../../../pages/Promo_Code/BLX_Token';
import Promocode from '../../../pages/Promo_Code';
import AffiliateCampaigns from '../../../pages/Promo_Code/Affiliate_Campaigns';
import AffiliateDashboard from '../../../pages/Promo_Code/Affiliate_Campaigns/Dashboard';
import { Staking } from '../../../pages/Staking';
import Analytics from '../Analytics/Analytics';

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
    {activeNavigation === Navigation.Chat && <Chat onBack={onBack} />}
    {activeNavigation === Navigation.Notifications && <Notifications onBack={onBack} />}
    {activeNavigation === Navigation.Info && <Info onBack={onBack} />}
    {activeNavigation === Navigation.OpenPositions && <OpenPosition onBack={onBack} />}
    {activeNavigation === Navigation.Stake && <Staking active={1} />}
    {activeNavigation === Navigation.UnStake && <Staking active={2} />}
    {activeNavigation === Navigation.Analytics && <Analytics />}
    {activeNavigation === Navigation.BLX && <Staking active={3} />}
    {activeNavigation === Navigation.MyAffiliateProg && <AffiliateDashboard />}
    {activeNavigation === Navigation.PromotionalTools && <AffiliateCampaigns />}
    {activeNavigation === Navigation.Statistics && <AffiliateBLX />}
    {activeNavigation === Navigation.Payments && <Promocode />}

  </div>
);

export { LeftSidebar };
