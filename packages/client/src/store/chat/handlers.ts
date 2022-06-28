import { ChatActionTypes } from './actionTypes';

const getAllChat = (state: any, { payload }:any) => ({
  ...state,
  chat: [...payload],
});

export const chatHandlers = {
  [ChatActionTypes.GetAllDataSuccess]: getAllChat,
};
