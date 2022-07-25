import createReducer from '@option-blitz/libs/utils/createReducer';
import { WatchlistState } from '../../types/store/watchlist';
import { watchlistHandlers } from './handlers';

export const watchlistInitialState: Readonly<WatchlistState> = {
  items: [],
};

export default createReducer(watchlistInitialState, watchlistHandlers);
