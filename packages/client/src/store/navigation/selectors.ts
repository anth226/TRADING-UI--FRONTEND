import { State } from '../../types/store';
import { NavigationState } from '../../types/store/navigation';

export const selectNavigation = (state: State) => state.navigation;
export const selectNavigationProp = <T extends keyof NavigationState>(propKey: T) =>
  (state: State) => state.navigation[propKey];
