import { HandlerFn } from '../../types/handler';
import { TouchState } from '../../types/store/touch';
import { touchSetState, touchSetPrice, touchToggle } from './actionCreators';
import { TouchActionTypes } from './actionTypes';

const setState: HandlerFn<typeof touchSetState, TouchState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const toggle: HandlerFn<typeof touchToggle, TouchState> = (
  state,
  { touchType },
) => {
  const putCheck = touchType === 'put' ? !state.putCheck : state.putCheck;
  const callCheck = touchType === 'call' ? !state.callCheck : state.callCheck;
  return {
    ...state,
    putCheck,
    callCheck,
  };
};

const setPrice: HandlerFn<typeof touchSetPrice, TouchState> = (
  state,
  { touchType, value },
) => {
  const callPrice = touchType === 'call' ? value : state.callPrice;
  const putPrice = touchType === 'put' ? value : state.putPrice;
  
  return {
    ...state,
    callPrice,
    putPrice,
  };
};

export const touchHandlers = {
  [TouchActionTypes.SetState]: setState,
  [TouchActionTypes.SetPrice]: setPrice,
  [TouchActionTypes.Toggle]: toggle,
};
