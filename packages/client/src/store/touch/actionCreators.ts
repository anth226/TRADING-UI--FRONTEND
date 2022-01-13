import { TouchState } from '../../types/store/touch';
import { TouchActionTypes } from './actionTypes';

type TouchType = 'call' | 'put';

export const touchSetState = (payload: Partial<TouchState>) => ({
  type: TouchActionTypes.SetState,
  payload,
});

export const touchSetPrice = (value: number, touchType: TouchType) => ({
  type: TouchActionTypes.SetPrice,
  value,
  touchType,
});

export const touchToggle = (touchType: TouchType) => ({
  type: TouchActionTypes.Toggle,
  touchType,
});
