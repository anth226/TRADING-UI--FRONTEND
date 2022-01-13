import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { touchSetPrice, touchToggle } from '../../store/touch/actionCreators';

export interface PositionItem {
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
  const dispatch = useDispatch();
  const viewClick = useCallback(() => {
    
  }, []);

  const placeTrade = useCallback(() => {

  }, []);
  
  const toggleCall = useCallback(() => {
    dispatch(touchToggle('call'));
  }, [dispatch]);
  
  const togglePut = useCallback(() => {
    dispatch(touchToggle('put'));
  }, [dispatch]);
  
  const setCallPrice = useCallback((value: string) => {
    dispatch(touchSetPrice(parseFloat(value), 'call'));
  }, [dispatch]);
  
  const setPutPrice = useCallback((value: string) => {
    dispatch(touchSetPrice(parseFloat(value), 'put'));
  }, [dispatch]);

  return {
    trade: {
      placeTrade,
      toggleCall,
      togglePut,
      setCallPrice,
      setPutPrice,
    },
    positions: {
      positionItems,
      date: '20-12-26 17:15:45',
      viewClick,
    },
  };
};
