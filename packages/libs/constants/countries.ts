import AudJpy from '../assets/images/countries/AUD-JPY.png';
import AudUsd from '../assets/images/countries/AUD-USD.png';
import EurAur from '../assets/images/countries/EUR-AUD.png';
import EurCad from '../assets/images/countries/EUR-CAD.png';
import EurChf from '../assets/images/countries/EUR-CHF.png';
import EurGbp from '../assets/images/countries/EUR-GBP.png';
import EurJpy from '../assets/images/countries/EUR-JPY.png';
import EurUsd from '../assets/images/countries/EUR-USD.png';
import GbpJpy from '../assets/images/countries/GBP-JPY.png';
import GbpUsd from '../assets/images/countries/GBP-USD.png';
import UsdCad from '../assets/images/countries/USD-CAD.png';
import UsdJpy from '../assets/images/countries/USD-JPY.png';

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
