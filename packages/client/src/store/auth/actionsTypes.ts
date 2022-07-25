export enum AuthActionTypes {
  Ready = 'AUTH.READY',
  SetTokens = 'AUTH.SET_TOKENS',
  SetState = 'AUTH.SET_STATE',
  Logout = 'AUTH.LOGOUT',
  Refresh = 'AUTH.REFRESH',

  PreSigned = 'AUTH.PRE_SIGNED',
  PreSignedSuccess = 'AUTH.PRE_SIGNED_SUCCESS',
  PreSignedFail = 'AUTH.PRE_SIGNED_FAIL',
}
