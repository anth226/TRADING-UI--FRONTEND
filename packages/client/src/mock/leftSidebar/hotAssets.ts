import { Coin, coinIcons, coinNames } from '@option-blitz/libs/constants/coin';
import { keys } from 'ramda';
import { Countries, countriesIcons, countriesNames } from '@option-blitz/libs/constants/countries';

const coinKeys = [
  Coin.BTC,
  Coin.ETH,
  Coin.LTC,
  Coin.XRP,
];
const countryKeys = keys(Countries);

export interface CardItem {
  key: keyof typeof Coin | keyof typeof Countries
  icon?: string
  title: string
  firstValue: string
  secondValue: string
}

export const hotAssetsItemsMock: CardItem[] = [
  ...coinKeys.map((coin) => ({
    key: coin,
    icon: coinIcons[coin],
    title: coinNames[coin],
    firstValue: '$100',
    secondValue: '+9.06',
  })),
  ...countryKeys.map((countries) => ({
    key: countries,
    icon: countriesIcons[countries],
    title: countriesNames[countries],
    firstValue: '$100',
    secondValue: '+9.06',
  })),
];
