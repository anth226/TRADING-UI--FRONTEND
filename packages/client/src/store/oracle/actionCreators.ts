import { get } from 'http';
import { OracleActionTypes } from './actionTypes';
import { ApiPaths } from '../../utils/api/constants';

export const getAllSymbols = () => get(ApiPaths.GetSymbols);

export const getSymbols = (payload: any) => ({
  type: OracleActionTypes.GetAllSymbols,
  payload,
});

export const getSymbolsSuccess = (payload:any) => ({
  type: OracleActionTypes.GetAllSymbolsSuccess,
  payload,
});

export const getSymbolsFail = (payload: any) => ({
  type: OracleActionTypes.GetAllSymbolsFail,
  payload,
});
