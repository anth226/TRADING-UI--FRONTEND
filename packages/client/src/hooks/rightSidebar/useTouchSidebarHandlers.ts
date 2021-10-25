import { useCallback } from 'react';

interface PositionItem {
  label: string
  value: string
}

const positionItems: PositionItem[] = [
  { label: 'Investment', value: '100$' },
  { label: 'Type', value: 'Double-touch' },
  { label: 'Time to expiry', value: '37:14' },
  { label: 'Status', value: 'ITM' },
  { label: 'PNL', value: '+100$' },
];

export const useTouchSidebarHandlers = () => {
  const viewClick = useCallback(() => {
    
  }, []);

  const placeTrade = useCallback(() => {

  }, []);

  return {
    trade: {
      placeTrade,
    },
    positions: {
      positionItems,
      date: '20-12-26 17:15:45',
      viewClick,
    },
  };
};
