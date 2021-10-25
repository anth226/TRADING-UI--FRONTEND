import { useCallback } from 'react';
import { PositionItem } from './useTouchSidebarHandlers';

const positionItems: PositionItem[] = [
  { label: 'Investment', value: '$10' },
  { label: 'Time to expiry', value: '00:04:23' },
  { label: 'Strike price', value: '$60' },
  { label: 'Break-even price', value: '$70' },
  { label: 'Current price', value: '$70' },
  { label: 'Status', value: 'ITM' },
  { label: 'Unrealized PNL', value: '+$10' },
];

export const useClassicSidebarHandlers = () => {
  const targetPriceClick = useCallback(() => {

  }, []);

  const sellClick = useCallback(() => {

  }, []);

  const settleClick = useCallback(() => {

  }, []);

  return {
    positions: {
      targetPriceClick,
      sellClick,
      settleClick,
      positionItems,
      date: '20-12-26 17:15:45',
    },
  };
};
