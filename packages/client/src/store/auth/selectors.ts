import { State } from '../../types/store';

export const selectAuth = (state: State) => state.auth;
export const selectAuthTokens = (state: State) => state.auth.tokens;
