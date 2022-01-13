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
  const callClick = useCallback(() => {

  }, []);
  
  const pullClick = useCallback(() => {

  }, []);
  
  const viewClick = useCallback(() => {

  }, []);
  
  return {
    trade: {
      progress: 37,
      callClick,
      pullClick,
    },
    position: {
      date: '20-12-26 17:15:45',
      positionItems,
      viewClick,
    },
  };
};
