import eth from '../assets/images/coins/ETH.svg';
import btc from '../assets/images/coins/BTC.svg';
import ltc from '../assets/images/coins/LTC.svg';
import xrp from '../assets/images/coins/XRP.svg';

export enum Coin {
  USDT = 'USDT',
  BLZ = 'BLZ',
  BLX = 'BLX',
  BTC = 'BTC',
  ETH = 'ETH',
  LTC = 'LTC',
  XRP = 'XRP',
}

export const coinNames: Record<Coin, string> = {
  [Coin.USDT]: 'USDT',
  [Coin.BLZ]: 'BLZ',
  [Coin.BLX]: 'BLX',
  [Coin.BTC]: 'BTC',
  [Coin.ETH]: 'ETH',
  [Coin.LTC]: 'LTC',
  [Coin.XRP]: 'XRP',
};

export const coinIcons: Partial<Record<Coin, string>> = {
  [Coin.BTC]: btc,
  [Coin.ETH]: eth,
  [Coin.LTC]: ltc,
  [Coin.XRP]: xrp,
};
