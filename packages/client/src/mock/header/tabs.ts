import { ProductType } from '@option-blitz/libs/constants/product';
import { Countries } from '@option-blitz/libs/constants/countries';
import { HeaderTabItem } from '../../hooks/header/useHeaderHandlers';

export const tabsMock: HeaderTabItem[] = [
  {
    id: 1,
    value: '3',
    interest: '10',
    productType: ProductType.Touch,
    countries: Countries.eurGbp,
  },
  {
    id: 2,
    value: '10',
    interest: '1',
    productType: ProductType.Classic,
    countries: Countries.gbpUsd,
    isActive: true,
  },
  {
    id: 3,
    value: '5',
    interest: '4',
    productType: ProductType.Binary,
    countries: Countries.eurJpy,
  },
  {
    id: 4,
    value: '13',
    interest: '7',
    productType: ProductType.Turbo,
    countries: Countries.gbpUsd,
  },
];
