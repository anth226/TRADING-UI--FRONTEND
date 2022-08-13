import { get } from 'http';
import { OracleActionTypes } from './actionTypes';
import { ApiPaths } from '../../utils/api/constants';

export const getAllSymbols = () => get(ApiPaths.GetSymbols);

export const getSymbols = (payload: any) => ({
  type: OracleActionTypes.GetAllSymbols,
  payload,
});

export const getSymbolsSuccess = (payload: any) => ({
  type: OracleActionTypes.GetAllSymbolsSuccess,
  payload,
});

export const getSymbolsFail = (payload: any) => ({
  type: OracleActionTypes.GetAllSymbolsFail,
  payload,
});

export const LastQuote = (item: string) => get(`${ApiPaths.LastQuote}/${item}`);

export const getLastQuote = (payload: any) => ({
  type: OracleActionTypes.GetLastQuote,
  payload,
});

export const getLastQuoteSuccess = (payload:any) => ({
  type: OracleActionTypes.GetLastQuoteSuccess,
  payload,
});

export const getLastQuoteFail = (payload: any) => ({
  type: OracleActionTypes.GetLastQuoteFail,
  payload,
});

export const SymbolDetail = (item: string) => get(`${ApiPaths.SymbolDetail}/${item}`);

export const getSymbolDetail = (payload: any) => ({
  type: OracleActionTypes.GetSymbolDetail,
  payload,
});

export const getSymbolDetailSuccess = (payload:any) => ({
  type: OracleActionTypes.GetSymbolDetailSuccess,
  payload,
});

export const getSymbolDetailFail = (payload: any) => ({
  type: OracleActionTypes.GetSymbolDetailFail,
  payload,
});
