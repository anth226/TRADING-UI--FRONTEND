import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { useState } from 'react';
import { Navigation, navigationIcons } from '../../constants/navigation/navigation';

interface INavigationItem {
  name: string
  icon?: FontIconName
  image?: string
}

interface RootItem {
  name: string,
  items: INavigationItem[]
  icon?: FontIconName
  image?: string
  size?: number
}

const tradingItems: INavigationItem[] = [
  { name: '1', icon: FontIconName.Fire },
  { name: '2', icon: FontIconName.Binocular },
  { name: '3', icon: FontIconName.Notify },
  { name: '4', icon: FontIconName.News },
  { name: '5', icon: FontIconName.OpenPos },
  { name: '6', icon: FontIconName.Lightning },
  { name: '7', icon: FontIconName.Chat },
  { name: '8', icon: FontIconName.Player },
];

const affiliatesItems: INavigationItem[] = [
  { name: '9', icon: FontIconName.Stake },
  { name: '10', icon: FontIconName.UnStake },
  { name: '11', icon: FontIconName.Analytics },
  { name: '12', icon: FontIconName.Blx },
];

const stakingItems: INavigationItem[] = [
  { name: '13', icon: FontIconName.AffiliateProg },
  { name: '14', image: navigationIcons[Navigation.PromoTools] },
  { name: '15', icon: FontIconName.Statistics },
  { name: '16', icon: FontIconName.Payments },
  { name: '17', icon: FontIconName.News },
];

const rootItems: RootItem[] = [
  { name: 'Trading', items: tradingItems, icon: FontIconName.OpenPos },
  {
    name: 'Affiliates',
    items: affiliatesItems, 
    image: navigationIcons[Navigation.Affiliates],
    size: 18,
  },
  {
    name: 'Staking', items: stakingItems, icon: FontIconName.AffiliateProg,
  },
];

export const useLeftNavigationBarHandlers = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const [activeRootItem, setActiveRootType] = useState('');
  
  return {
    rootItems,
    setActiveNavItem,
    setActiveRootType,
    activeNavItem,
    activeRootItem,
  };
};
