import { StakingActionTypes } from './actionTypes';

const getStakings = (state: any, { payload }: any) => ({
  ...state,
  stakingData: [...payload],
});

export const stakingHandlers = {
  [StakingActionTypes.GetStakingDataSuccess]: getStakings,
};
