import { OptionItem } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { useCallback } from 'react';
import { hotAssetsItemsMock } from '../../mock/leftSidebar/hotAssets';

const sortOptions: OptionItem[] = [
  { value: 'Most Traded' },
  { value: 'Biggest Rise' },
  { value: 'Biggest fall over last 24' },
];

const filterOptions: OptionItem[] = [
  { value: 'All Instruments' },
  { value: 'Forex' },
  { value: 'Crypto' },
  { value: 'Metals' },
  { value: 'Energy' },
];

export const useHotAssetsHandlers = () => {
  const filterChange = useCallback(() => {
    
  }, []);
  
  const sortChange = useCallback(() => {
    
  }, []);
  
  return {
    filterOptions,
    sortOptions,
    cardItems: hotAssetsItemsMock,
    filterChange,
    sortChange,
  };
};
