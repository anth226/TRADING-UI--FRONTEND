export enum AuthActionTypes {
  Ready = 'AUTH.READY',
  SetTokens = 'AUTH.SET_TOKENS',
  SetState = 'AUTH.SET_STATE',
  Logout = 'AUTH.LOGOUT',
  Refresh = 'AUTH.REFRESH',
  /// ////TESTNG //////////////
  FetchPosts = 'AUTH.FETCH_POSTS',
  FetchPostsSuccess = 'AUTH.FETCH_POSTS_SUCCESS',
  FetchPostsFail = 'AUTH.FETCH_POSTS_FAIL',
  /// ////TESTNG //////////////
}
