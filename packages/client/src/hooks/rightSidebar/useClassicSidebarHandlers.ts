import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { profitItemsMock } from '../../mock/rightSidebar/classicSidebar';
import { PositionItem } from './useTouchSidebarHandlers';
import { classicSetTargetPrice, classicToggleTakeProfit } from '../../store/classic/actionCreators';

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

export interface ProfitChartItem {
  profitOrLose: number,
  price: number;
  color: string;
  label: string
}

export const useClassicSidebarHandlers = () => {
  const dispatch = useDispatch();
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
  
  const toggleTakeProfit = useCallback(() => {
    dispatch(classicToggleTakeProfit());
  }, [dispatch]);

  const setTargetPrice = useCallback((price: string) => {
    dispatch(classicSetTargetPrice(parseFloat(price || '0')));
  }, [dispatch]);

  return {
    trade: {
      activeButton,
      callClick,
      putClick,
      placeOrderClick,
      profitItems: profitItemsMock,
      toggleTakeProfit,
      setTargetPrice,
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
