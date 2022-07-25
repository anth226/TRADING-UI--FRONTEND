import { WatchlistActionTypes } from './actionTypes';

export const getItems = (payload:any) => ({
  types: WatchlistActionTypes.GetAllItems,
  payload,
});

export const getItemsSuccess = (payload:any) => ({
  types: WatchlistActionTypes.GetAllItemsSuccess,
  payload,
});

export const getItemsFail = (payload:any) => ({
  types: WatchlistActionTypes.GetAllItemsFail,
  payload,
});

export const addItems = (payload:any) => ({
  types: WatchlistActionTypes.AddItem,
  payload,
});

export const addItemsSuccess = (payload:any) => ({
  types: WatchlistActionTypes.AddItemSuccess,
  payload,
});

export const addItemFail = (payload:any) => ({
  types: WatchlistActionTypes.AddItemFail,
  payload,
});

export const deleteItem = (payload:any) => ({
  types: WatchlistActionTypes.DeleteItem,
  payload,
});

export const deleteItemSuccess = (payload:any) => ({
  types: WatchlistActionTypes.DeleteItemSuccess,
  payload,
});

export const deleteItemFail = (payload:any) => ({
  types: WatchlistActionTypes.DeleteItemFail,
  payload,
});
