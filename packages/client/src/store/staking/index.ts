import createReducer from '@option-blitz/libs/utils/createReducer';
import { StakingState } from '../../types/store/staking';
import { stakingHandlers } from './handlers';

export const StakingInitialState: Readonly<StakingState> = {
  stakingData: [],
};

export default createReducer(StakingInitialState, stakingHandlers);
