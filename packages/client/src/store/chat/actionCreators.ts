import { get } from 'http';
import { ChatActionTypes } from './actionTypes';
import chat_mok from '../../mock/option_blith_postman/chat.proto.postman_collection.json';

export const getAllChat = () => get(chat_mok);

export const getChat = (payload:any) => ({
  type: ChatActionTypes.GetAllData,
  payload,
});

export const getChatSuccess = (payload:any) => ({
  type: ChatActionTypes.GetAllDataSuccess,
  payload,
});

export const getChatFail = (payload:any) => ({
  type: ChatActionTypes.GetAllDataFail,
  payload,
});

export const deleteChat = (payload: any) => ({
  type: ChatActionTypes.DeleteData,
  payload,
});

export const deleteChatSuccess = (payload:any) => ({
  type: ChatActionTypes.DeleteDataSuccess,
  payload,
});

export const deleteChatFail = (payload:any) => ({
  type: ChatActionTypes.DeleteDataFail,
  payload,
});

export const sendMessage = (payload:any) => ({
  type: ChatActionTypes.SendMessage,
  payload,
});

export const sendMessageSuccess = (payload:any) => ({
  type: ChatActionTypes.SendMessageSuccess,
  payload,
});

export const sendMessageFail = (payload:any) => ({
  type: ChatActionTypes.SendMessageFail,
  payload,
});
