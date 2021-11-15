import { HandlerFn } from '../../types/handler';
import { ClassicState } from '../../types/store/classic';
import { classicSetState, classicSetTargetPrice, classicToggleTakeProfit } from './actionCreators';
import { ClassicActionTypes } from './actionTypes';

const setState: HandlerFn<typeof classicSetState, ClassicState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const toggleTakeProfit: HandlerFn<typeof classicToggleTakeProfit, ClassicState> = (
  state,
) => ({
  ...state,
  takeProfitCheck: !state.takeProfitCheck,
});

const setTargetPrice: HandlerFn<typeof classicSetTargetPrice, ClassicState> = (
  state,
  { payload },
) => ({
  ...state,
  targetPrice: payload,
});

export const classicHandlers = {
  [ClassicActionTypes.SetState]: setState,
  [ClassicActionTypes.ToggleTakeProfit]: toggleTakeProfit,
  [ClassicActionTypes.SetTargetPrice]: setTargetPrice,
};
