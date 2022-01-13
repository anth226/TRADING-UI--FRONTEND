import btc from '../assets/images/coins/BTC.svg';
import eth from '../assets/images/coins/ETH.svg';
import ltc from '../assets/images/coins/LTC.svg';
import xrp from '../assets/images/coins/XRP.svg';

export enum Crypto {
  BTC = 'BTC',
  ETH = 'ETH',
  LTC = 'LTC',
  XRP = 'XRP',
}

export const cryptoNames: Record<Crypto, string> = {
  [Crypto.BTC]: 'BTC/USD',
  [Crypto.ETH]: 'ETH/USD',
  [Crypto.LTC]: 'LTC/USD',
  [Crypto.XRP]: 'XRP/USD',
};

export const cryptoIcons: Record<Crypto, string> = {
  [Crypto.BTC]: btc,
  [Crypto.ETH]: eth,
  [Crypto.LTC]: ltc,
  [Crypto.XRP]: xrp,
};
