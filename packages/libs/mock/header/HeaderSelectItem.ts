import { HeaderSelectItem } from '../../components/common/HeaderBalance';
import { Coin } from '../../constants/coin';

export const headerOptionsMock: HeaderSelectItem[] = [
  {
    value: 0, coinValue: '0.00', coin: Coin.USDT, title: 'Live balance',
  },
  {
    value: 1, coinValue: '0.00', coin: Coin.BLX, title: 'Margin Balance',
  },
  {
    value: 2, coinValue: '0.00', coin: Coin.BLZ, title: 'Bonus balance',
  },
];
