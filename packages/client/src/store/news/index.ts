import createReducer from '@option-blitz/libs/utils/createReducer';
import { NewsState } from '../../types/store/news';
import { newsHandlers } from './handlers';

export const newsInitialState: Readonly<NewsState> = {
  news: [],
  loading: false,
  error: {},
};

export default createReducer(newsInitialState, newsHandlers);
