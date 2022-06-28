import createReducer from '@option-blitz/libs/utils/createReducer';
import { ChatState } from '../../types/store/chat';
import { chatHandlers } from './handlers';

export const chatInitialState: Readonly<ChatState> = {
  chat: [],
};

export default createReducer(chatInitialState, chatHandlers);
