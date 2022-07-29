import { ChatActionTypes } from './actionTypes';

const sendPrivateMessage = (state: any) => ({
  ...state,
});
const sendMessage = (state: any) => ({
  ...state,
});
export const chatHandlers = {
  [ChatActionTypes.SendPrivateMessage]: sendPrivateMessage,
  [ChatActionTypes.SendMessage]: sendMessage,
};
