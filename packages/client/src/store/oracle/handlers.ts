import { OracleActionTypes } from './actionTypes';

const getAllSymbols = (state: any, { payload }: any) => ({
  ...state,
  news: { ...payload },
});

const getAllSymbolsSuccess = (state: any, { payload }: any) => ({
  ...state,
  news: { ...payload },
});

const getAllSymbolsFail = (state: any, { payload }: any) => ({
  ...state,
  news: { ...payload },
});

export const oracleHandlers = {
  [OracleActionTypes.GetAllSymbols]: getAllSymbols,
  [OracleActionTypes.GetAllSymbolsSuccess]: getAllSymbolsSuccess,
  [OracleActionTypes.GetAllSymbolsFail]: getAllSymbolsFail,
};
