import { ProductType } from '@option-blitz/libs/constants/product';
import { Countries } from '@option-blitz/libs/constants/countries';
import { HeaderTabItem } from '../../layouts/Header';

export const tabsMock: HeaderTabItem[] = [
  {
    value: '3',
    interest: '10',
    productType: ProductType.Touch,
    countries: Countries.eurGbp,
  },
  {
    value: '10',
    interest: '1',
    productType: ProductType.Classic,
    countries: Countries.gbpUsd,
    isActive: true,
  },
  {
    value: '5',
    interest: '4',
    productType: ProductType.Binary,
    countries: Countries.eurJpy,
  },
];
