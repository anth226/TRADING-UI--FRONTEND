import AudJpy from '../assets/images/countries/AUD-JPY.svg';
import AudUsd from '../assets/images/countries/AUD-USD.svg';
import EurAur from '../assets/images/countries/EUR-AUD.svg';
import EurCad from '../assets/images/countries/EUR-CAD.svg';
import EurChf from '../assets/images/countries/EUR-CHF.svg';
import EurGbp from '../assets/images/countries/EUR-GBP.svg';
import EurJpy from '../assets/images/countries/EUR-JPY.svg';
import EurUsd from '../assets/images/countries/EUR-USD.svg';
import GbpJpy from '../assets/images/countries/GBP-JPY.svg';
import GbpUsd from '../assets/images/countries/GBP-USD.svg';
import UsdCad from '../assets/images/countries/USD-CAD.svg';
import UsdJpy from '../assets/images/countries/USD-JPY.svg';

export enum Countries {
  audJpy = 'audJpy',
  audUsd = 'audUsd',
  eurAur = 'eurAur',
  eurCad = 'eurCad',
  eurChf = 'eurChf',
  eurGbp = 'eurGbp',
  eurJpy = 'eurJpy',
  eurUsd = 'eurUsd',
  gbpJpy = 'gbpJpy',
  gbpUsd = 'gbpUsd',
  usdCad = 'usdCad',
  usdJpy = 'usdJpy',
}

export const countriesIcons: Record<Countries, string> = {
  [Countries.audJpy]: AudJpy,
  [Countries.audUsd]: AudUsd,
  [Countries.eurAur]: EurAur,
  [Countries.eurCad]: EurCad,
  [Countries.eurChf]: EurChf,
  [Countries.eurGbp]: EurGbp,
  [Countries.eurJpy]: EurJpy,
  [Countries.eurUsd]: EurUsd,
  [Countries.gbpJpy]: GbpJpy,
  [Countries.gbpUsd]: GbpUsd,
  [Countries.usdCad]: UsdCad,
  [Countries.usdJpy]: UsdJpy,
};

export const countriesNames: Record<Countries, string> = {
  [Countries.audJpy]: 'AUD/JPY',
  [Countries.audUsd]: 'AUD/USD',
  [Countries.eurAur]: 'EUR/AUR',
  [Countries.eurCad]: 'EUR/CAD',
  [Countries.eurChf]: 'EUR/CHF',
  [Countries.eurGbp]: 'EUR/GBP',
  [Countries.eurJpy]: 'EUR/JPY',
  [Countries.eurUsd]: 'EUR/USD',
  [Countries.gbpJpy]: 'GBP/JPY',
  [Countries.gbpUsd]: 'GBP/USD',
  [Countries.usdCad]: 'USD/CAD',
  [Countries.usdJpy]: 'USD/JPY',
};
