export interface AuthState {
  tokens: {
    access: string;
    refresh: string;
  },
  posts:any
  wallet: string
}
