import { AuthState } from './auth';
import { TabsState } from './tabs';

export interface State {
  auth: AuthState
  tabs: TabsState
}
