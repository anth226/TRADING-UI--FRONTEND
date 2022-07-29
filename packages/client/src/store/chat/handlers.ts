import { ChatActionTypes } from './actionTypes';

const sendPrivateMessage = (state: any) => ({
  ...state,
});
export const chatHandlers = {
  [ChatActionTypes.SendPrivateMessage]: sendPrivateMessage,
};
