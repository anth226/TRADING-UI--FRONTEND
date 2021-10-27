import cooperUsd from '../assets/images/metals/Copper-USD.svg';
import xagUsd from '../assets/images/metals/XAG-USD.svg';
import xauUsd from '../assets/images/metals/XAU-USD.svg';
import xpdUsd from '../assets/images/metals/XPD-USD.svg';
import xptUsd from '../assets/images/metals/XPT-USD.svg';

export enum Metal {
  Cooper = 'Cooper',
  XAG = 'XAG',
  XAU = 'XAU',
  XPD = 'XPD',
  XPT = 'XPT',
}

export const metalIcons: Record<Metal, string> = {
  [Metal.Cooper]: cooperUsd,
  [Metal.XAG]: xagUsd,
  [Metal.XAU]: xauUsd,
  [Metal.XPD]: xpdUsd,
  [Metal.XPT]: xptUsd,
};

export const metalNames: Record<Metal, string> = {
  [Metal.Cooper]: 'Copper/USD',
  [Metal.XAG]: 'XAG/USD',
  [Metal.XAU]: 'XAU/USD',
  [Metal.XPD]: 'XPD/USD',
  [Metal.XPT]: 'XPT/USD',
};
