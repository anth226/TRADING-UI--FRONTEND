import { useContext } from 'react';

import { OptionBlitzStore } from './OptionBlitzStore';

import { useOptionBlitz } from './OptionBlitzProvider';

export const useOptionBlitzStore = <T>(): OptionBlitzStore<T> => {
  const optionBlitz = useOptionBlitz();
  const store = optionBlitz.optionBlitz?.store;

  return store as OptionBlitzStore<T>;
};
