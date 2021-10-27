import { keys } from 'ramda';
import { Countries, countriesIcons, countriesNames } from '@option-blitz/libs/constants/countries';
import { Metal, metalIcons, metalNames } from '@option-blitz/libs/constants/metal';
import { Energy, energyNames, energyIcons } from '@option-blitz/libs/constants/energy';
import { Crypto, cryptoIcons, cryptoNames } from '@option-blitz/libs/assets/images/crypto/crypto';

const cryptoKeys = keys(Crypto);
const countryKeys = keys(Countries);
const metalKeys = keys(Metal);
const energyKeys = keys(Energy);

export interface CardItem {
  key: keyof typeof Crypto | keyof typeof Countries | keyof typeof Metal | keyof typeof Energy
  icon?: string
  title: string
  firstValue: string
  secondValue: string
}

export const hotAssetsItemsMock: CardItem[] = [
  ...cryptoKeys.map((coin) => ({
    key: coin,
    icon: cryptoIcons[coin],
    title: cryptoNames[coin],
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
  ...metalKeys.map((metal) => ({
    key: metal,
    icon: metalIcons[metal],
    title: metalNames[metal],
    firstValue: '$100',
    secondValue: '+9.06',
  })),
  ...energyKeys.map((energy) => ({
    key: energy,
    icon: energyIcons[energy],
    title: energyNames[energy],
    firstValue: '$100',
    secondValue: '+9.06',
  })),
];
