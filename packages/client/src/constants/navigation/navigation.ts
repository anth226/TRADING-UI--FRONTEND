import affiliates from '../../../public/navigationIcons/affiliates.svg';
import promoTools from '../../../public/navigationIcons/promo-tools.svg';

export enum Navigation {
  Affiliates = 'affiliates',
  PromoTools = 'PromoTools',
}

export const navigationIcons: Record<Navigation, string> = {
  [Navigation.Affiliates]: affiliates,
  [Navigation.PromoTools]: promoTools,
};
