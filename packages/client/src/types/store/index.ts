import { AuthState } from './auth';
import { TabsState } from './tabs';
import { NavigationState } from './navigation';
import { ClassicState } from './classic';
import { TouchState } from './touch';
import { NewsState } from './news';

export interface State {
  auth: AuthState
  tabs: TabsState
  navigation: NavigationState
  classic: ClassicState
  touch: TouchState
  news: NewsState
}
