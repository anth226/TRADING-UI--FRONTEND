import createReducer from '@option-blitz/libs/utils/createReducer';
import { postHandlers } from './handlers';
import { PostsState } from '../../types/store/posts';

// @ts-ignore
export const postsInitialState: Readonly<PostsState> = {
  info: [],
};

export default createReducer(postsInitialState, postHandlers);
