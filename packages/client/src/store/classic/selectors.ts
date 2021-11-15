import { State } from '../../types/store';
import { ClassicState } from '../../types/store/classic';

export const selectClassic = (state: State) => state.classic;
export const selectClassicProp = <T extends keyof ClassicState>(propKey: T) =>
  (state: State) => state.classic[propKey];
