import natgasUsd from '../assets/images/energy/Natgas-USD.svg';
import oilUsd from '../assets/images/energy/OIL-USD.svg';

export enum Energy {
  Natgas = 'Natgas',
  OIL = 'OIL',
}

export const energyIcons: Record<Energy, string> = {
  [Energy.Natgas]: natgasUsd,
  [Energy.OIL]: oilUsd,
};

export const energyNames: Record<Energy, string> = {
  [Energy.Natgas]: 'Natgas/USD',
  [Energy.OIL]: 'OIL/USD',
};
