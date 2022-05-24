import bitcoin_icon from '@option-blitz/libs/assets/images/balances/icons/bitcoin.svg';
import energy_icon from '@option-blitz/libs/assets/images/energy/energy.svg';
import coin_icon from '@option-blitz/libs/assets/images/balances/icons/coin.svg';
import gold from '@option-blitz/libs/assets/images/metals/gold.svg';
import { money } from './Forex/data';
import { metals } from './Forex/metals';
import { energy } from './Forex/energy';
import { crypto } from './Forex/crypto';

export const Binary = [
  {
    icon: coin_icon,
    title: 'Forex',
    text: 'All major FX pairs with real-time updated currency prices',
    badge: '2',
    data: money,
  },
  {
    icon: bitcoin_icon,
    title: 'Crypto',
    text: 'Top cryptocurrencies direct from the market',
    badge: '2',
    data: crypto,
  },
  {
    icon: gold,
    title: 'Metals',
    text: 'Trade precious metals',
    badge: '2',
    data: metals,
  },
  {
    icon: energy_icon,
    title: 'Energy',
    text: 'Natural gas and Crude oil trading',
    badge: '2',
    data: energy,
  },
];
