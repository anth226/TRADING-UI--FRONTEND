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

export const createMessage = (payload:any) => ({
  type: ChatActionTypes.CreateMessage,
  payload,
});

export const createMessageSuccess = (payload:any) => ({
  type: ChatActionTypes.CreateMessageSuccess,
  payload,
});

export const createMessageFail = (payload:any) => ({
  type: ChatActionTypes.CreateMessageFail,
  payload,
});

export const getMessage = (payload:any) => ({
  type: ChatActionTypes.GetMessage,
  payload,
});

export const getMessageSuccess = (payload:any) => ({
  type: ChatActionTypes.GetMessageSuccess,
  payload,
});

export const getMessageFail = (payload:any) => ({
  type: ChatActionTypes.GetMessageFail,
  payload,
});

export const updateMessage = (payload:any) => ({
  type: ChatActionTypes.UpdateMessage,
  payload,
});

export const updateMessageSuccess = (payload:any) => ({
  type: ChatActionTypes.UpdateMessageSuccess,
  payload,
});

export const updateMessageFail = (payload:any) => ({
  type: ChatActionTypes.UpdateMessageFail,
  payload,
});

export const deleteMessage = (payload:any) => ({
  type: ChatActionTypes.DeleteMessage,
  payload,
});

export const deleteMessageSuccess = (payload:any) => ({
  type: ChatActionTypes.DeleteMessageSuccess,
  payload,
});

export const deleteMessageFail = (payload:any) => ({
  type: ChatActionTypes.DeleteMessageFail,
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
