import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Navigation, navigationNames, RootPart, rootPartNames, 
} from '../../constants/navigation/navigation';
import { useShallowSelector } from '../useShallowSelector';
import { selectNavigation } from '../../store/navigation/selectors';
import { navigationSetItem, navigationToggleMobileSidebar } from '../../store/navigation/actionCreators';

interface INavigationItem {
  type?: Navigation
  name: string
  icon: FontIconName
  image?: string
}

export interface RootNavigationPart {
  name: string,
  items: INavigationItem[]
  icon?: FontIconName
  image?: string
  size?: number
  type: RootPart,
}

const tradingItems: INavigationItem[] = [
  {
    name: navigationNames[Navigation.HotAssets],
    icon: FontIconName.Fire,
    type: Navigation.HotAssets, 
  },
  {
    name: navigationNames[Navigation.WatchList],
    icon: FontIconName.Binocular,
    type: Navigation.WatchList, 
  },
  {
    name: navigationNames[Navigation.Notifications],
    icon: FontIconName.Notify,
    type: Navigation.Notifications, 
  },
  { name: navigationNames[Navigation.News], icon: FontIconName.News, type: Navigation.News },
  {
    name: navigationNames[Navigation.OpenPositions],
    icon: FontIconName.OpenPos,
    type: Navigation.OpenPositions, 
  },
  {
    name: navigationNames[Navigation.Signals],
    icon: FontIconName.Lightning,
    type: Navigation.Signals, 
  },
  { name: navigationNames[Navigation.Chat], icon: FontIconName.Chat, type: Navigation.Chat },
  {
    name: navigationNames[Navigation.VideoTutorials],
    icon: FontIconName.Player,
    type: Navigation.VideoTutorials, 
  },
];

const affiliatesItems: INavigationItem[] = [
  { 
    name: navigationNames[Navigation.Stake], 
    type: Navigation.Stake,
    icon: FontIconName.Stake, 
  },
  { 
    name: navigationNames[Navigation.UnStake], 
    type: Navigation.UnStake,
    icon: FontIconName.UnStake, 
  },
  { 
    name: navigationNames[Navigation.Analytics], 
    type: Navigation.Analytics,
    icon: FontIconName.Analytics, 
  },
  { 
    name: navigationNames[Navigation.BLX], 
    type: Navigation.BLX,
    icon: FontIconName.Blx, 
  },
];

const stakingItems: INavigationItem[] = [
  { 
    name: navigationNames[Navigation.MyAffiliateProg], 
    type: Navigation.MyAffiliateProg,
    icon: FontIconName.AffiliateProg, 
  },
  { 
    name: navigationNames[Navigation.PromotionalTools], 
    type: Navigation.PromotionalTools,
    icon: FontIconName.Doc, 
  },
  {
    name: navigationNames[Navigation.Statistics], 
    type: Navigation.Statistics,
    icon: FontIconName.Statistics, 
  },
  {
    name: navigationNames[Navigation.Payments], 
    type: Navigation.Payments,
    icon: FontIconName.Payments, 
  },
  {
    name: navigationNames[Navigation.News], 
    type: Navigation.News,
    icon: FontIconName.News, 
  },
];

export const rootNavigationParts: RootNavigationPart[] = [
  {
    name: rootPartNames[RootPart.Trading],
    items: tradingItems,
    icon: FontIconName.OpenPos,
    type: RootPart.Trading, 
  },
  {
    name: rootPartNames[RootPart.Affiliates],
    items: affiliatesItems, 
    icon: FontIconName.Affiliates,
    size: 18,
    type: RootPart.Affiliates,
  },
  {
    name: rootPartNames[RootPart.Staking],
    items: stakingItems,
    icon: FontIconName.AffiliateProg,
    type: RootPart.Staking,
  },
];

export const useLeftNavigationBarHandlers = () => {
  const dispatch = useDispatch();
  
  const [activeRootItem, setActiveRootType] = useState<RootPart>();
  
  const {
    activeNavigation,
    mobileSideBarIsOpen,
  } = useShallowSelector(selectNavigation);
  
  const setActiveNavItem = useCallback((val?: Navigation) => {
    dispatch(navigationSetItem(val));
    dispatch(navigationToggleMobileSidebar());
  }, [dispatch]);
  
  const closeSidebar = useCallback(() => {
    dispatch(navigationSetItem(undefined));
  }, [dispatch]);
  
  const toggleMobileNavigation = useCallback(() => {
    dispatch(navigationToggleMobileSidebar());
  }, [dispatch]);
  
  return {
    rootItems: rootNavigationParts,
    setActiveNavItem,
    setActiveRootType,
    activeNavItem: activeNavigation,
    activeRootItem,
    closeSidebar,
    activeNavigation,
    mobileSidebarIsOpen: mobileSideBarIsOpen,
    toggleMobileNavigation,
  };
};
