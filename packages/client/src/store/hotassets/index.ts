import createReducer from '@option-blitz/libs/utils/createReducer';
import { HotAssetsState } from '../../types/store/hotassets';
import { assetsHandlers } from './handlers';

export const hotAssetsInitialState: Readonly<HotAssetsState> = {
  assets: [],
};

export default createReducer(hotAssetsInitialState, assetsHandlers);
