import { BalanceActionTypes } from './actionTypes';

const getAllBalances = (state:any, { payload }:any) => ({
  ...state,
  balances: [...payload],
});

export const balancesGandlers = {
  [BalanceActionTypes.GetAllBalancesDataSuccess]: getAllBalances,
};
