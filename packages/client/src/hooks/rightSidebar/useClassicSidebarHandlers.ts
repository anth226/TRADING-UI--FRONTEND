import { useCallback, useState } from 'react';
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

type ActiveButton = 'call' | 'put';

export const useClassicSidebarHandlers = () => {
  const [activeButton, setActiveButton] = useState<ActiveButton>('call');
  
  const callClick = useCallback(() => {
    setActiveButton('call');
  }, []);
  
  const putClick = useCallback(() => {
    setActiveButton('put');
  }, []);

  const placeOrderClick = useCallback(() => {

  }, []);
  
  const targetPriceClick = useCallback(() => {

  }, []);

  const sellClick = useCallback(() => {

  }, []);

  const settleClick = useCallback(() => {

  }, []);

  return {
    trade: {
      activeButton,
      callClick,
      putClick,
      placeOrderClick,
    },
    positions: {
      targetPriceClick,
      sellClick,
      settleClick,
      positionItems,
      date: '20-12-26 17:15:45',
    },
  };
};
