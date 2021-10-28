import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { useCallback, useState } from 'react';
import {
  Navigation, navigationNames, RootPart, rootPartNames,
} from '../../constants/navigation/navigation';

interface INavigationItem {
  type?: Navigation
  name: string
  icon?: FontIconName
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
  { name: '9', icon: FontIconName.Stake },
  { name: '10', icon: FontIconName.UnStake },
  { name: '11', icon: FontIconName.Analytics },
  { name: '12', icon: FontIconName.Blx },
];

const stakingItems: INavigationItem[] = [
  { name: '13', icon: FontIconName.AffiliateProg },
  { name: '14', icon: FontIconName.Doc },
  { name: '15', icon: FontIconName.Statistics },
  { name: '16', icon: FontIconName.Payments },
  { name: '17', icon: FontIconName.News },
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
  const [activeNavItem, setActiveNavItem] = useState<Navigation>();
  const [activeRootItem, setActiveRootType] = useState<RootPart>();
  
  const closeSidebar = useCallback(() => {
    setActiveNavItem(undefined);
  }, []);
  
  return {
    rootItems: rootNavigationParts,
    setActiveNavItem,
    setActiveRootType,
    activeNavItem,
    activeRootItem,
    closeSidebar,
  };
};
