export enum ApiPaths {
  AuthRefresh = '/api/v1/auth/refresh',
  FetchPostsUrl = '/posts',
  GetPostsUrl = '/users',

  GetNews = '/api/v1/news/get_news',
  GetSymbols = '/api/v1/oracle/internal/category_symbols',
  LastQuote = '/api/v1/oracle/last_quote/:symbol',
  PreSigned = '/api/v1/auth/pre_signed',
  SendPrivateMessage = '/api/v1/chat/messages',
}
