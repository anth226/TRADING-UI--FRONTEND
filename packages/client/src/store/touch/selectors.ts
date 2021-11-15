import { State } from '../../types/store';
import { TouchState } from '../../types/store/touch';

export const selectTouch = (state: State) => state.touch;
export const selectTouchProps = <T extends keyof TouchState>(propKey: T) => 
  (state: State) => state.touch[propKey];
