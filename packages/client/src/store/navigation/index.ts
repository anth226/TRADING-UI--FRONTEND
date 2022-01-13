import createReducer from '@option-blitz/libs/utils/createReducer';
import { NavigationState } from '../../types/store/navigation';
import { navigationHandlers } from './handlers';

const initialState: Readonly<NavigationState> = {
  mobileSideBarIsOpen: false,
};

export default createReducer(initialState, navigationHandlers);
