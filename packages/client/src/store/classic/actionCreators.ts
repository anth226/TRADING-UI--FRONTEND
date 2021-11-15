import { ClassicState } from '../../types/store/classic';
import { ClassicActionTypes } from './actionTypes';

export const classicSetState = (payload: Partial<ClassicState>) => ({
  type: ClassicActionTypes.SetState,
  payload,
});

export const classicSetTargetPrice = (payload: number) => ({
  type: ClassicActionTypes.SetTargetPrice,
  payload,
});

export const classicToggleTakeProfit = () => ({
  type: ClassicActionTypes.ToggleTakeProfit,
});
