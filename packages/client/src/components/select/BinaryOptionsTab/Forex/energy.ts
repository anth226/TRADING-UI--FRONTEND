import oil from '@option-blitz/libs/assets/images/energy/OIL-USD.svg';
import gas from '@option-blitz/libs/assets/images/energy/Natgas-USD.svg';
import sentiment from '@option-blitz/libs/assets/images/sentiment.png';
import { Forex } from './types';

export const energy: Forex [] = [
  {
    assets: 'XAU/USD',
    icon: oil,
    valute: 'EUR/USD',
    course: '1.282815',
    profit1: '84%',
    profit2: '84%',
    profit3: '84%',
    profit4: '84%',
    profit5: '70%',
    profit6: '70%',
    sentiment,
    chart: '\'http://www.w3.org/2000/svg\'',
    watchlist: [],
    tradeNow: [],
  },
  {
    assets: 'XAU/USD',
    icon: gas,
    valute: 'EUR/USD',
    course: '1.282815',
    profit1: '84%',
    profit2: '84%',
    profit3: '84%',
    profit4: '84%',
    profit5: '70%',
    profit6: '70%',
    sentiment,
    chart: '\'http://www.w3.org/2000/svg\'',
    watchlist: [],
    tradeNow: [],
  },

];
