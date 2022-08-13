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
  errors: payload,
});
/// //////////////////////////////////////
const getLastQuote = (state: any, { payload }: any) => ({
  ...state,
  lastQuote: { ...payload },
});

const getLastQuoteSuccess = (state: any, { payload }: any) => ({
  ...state,
  lastQuote: { ...payload },
});

const getLastQuoteFail = (state: any, { payload }: any) => ({
  ...state,
  errors: payload,
});

export const oracleHandlers = {
  [OracleActionTypes.GetAllSymbols]: getAllSymbols,
  [OracleActionTypes.GetAllSymbolsSuccess]: getAllSymbolsSuccess,
  [OracleActionTypes.GetAllSymbolsFail]: getAllSymbolsFail,

  [OracleActionTypes.GetLastQuote]: getLastQuote,
  [OracleActionTypes.GetLastQuoteSuccess]: getLastQuoteSuccess,
  [OracleActionTypes.GetLastQuoteFail]: getLastQuoteFail,

};
