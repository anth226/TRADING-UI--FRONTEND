import { SignalsActionTypes } from './actionTypes';

const getAllSignals = (state: any, { payload }: any) => ({
  ...state,
  signals: [...payload],
});

export const signalsHandlers = {
  [SignalsActionTypes.GetAllDataSuccess]: getAllSignals,
};
