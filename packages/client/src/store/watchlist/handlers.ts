import { WatchlistActionTypes } from './actionTypes';

const getAllWatchlist = (state:any, { payload }:any) => ({
  ...state,
  items: [...payload],
});
export const watchlistHandlers = {
  [WatchlistActionTypes.GetAllItemsSuccess]: getAllWatchlist,
};
