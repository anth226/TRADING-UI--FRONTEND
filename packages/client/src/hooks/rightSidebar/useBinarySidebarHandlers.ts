import { useCallback } from 'react';

interface PositionItem {
  label: string
  value: string
}

const positionItems: PositionItem[] = [
  { label: 'Investment', value: '100$' },
  { label: 'Time to expiry', value: '37:14' },
  { label: 'Status', value: 'ITM' },
  { label: 'PNL', value: '+100$' },
];

export const useBinarySidebarHandlers = () => {
  const plusClick = useCallback(() => {
    
  }, []);
  
  const minusClick = useCallback(() => {
    
  }, []);
  
  const callClick = useCallback(() => {

  }, []);
  
  const pullClick = useCallback(() => {

  }, []);
  
  const viewClick = useCallback(() => {

  }, []);
  
  return {
    trade: {
      plusClick,
      minusClick,
      progress: 37,
      callClick,
      pullClick,
      inputValue: '0.00',
    },
    position: {
      date: '20-12-26 17:15:45',
      positionItems,
      viewClick,
    },
  };
};
