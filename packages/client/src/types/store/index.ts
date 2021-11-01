import { AuthState } from './auth';
import { TabsState } from './tabs';
import { NavigationState } from './navigation';

export interface State {
  auth: AuthState
  tabs: TabsState
  navigation: NavigationState
}
