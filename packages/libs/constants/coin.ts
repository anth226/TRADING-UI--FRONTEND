export enum Coin {
  USDT = 'USDC',
  BLZ = 'BLZ',
  BLX = 'BLX',
}

export const coinNames: Record<Coin, string> = {
  [Coin.USDT]: 'USDC',
  [Coin.BLZ]: 'BLZ',
  [Coin.BLX]: 'BLX',
};
