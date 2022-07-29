// @ts-ignore
import { ChatActionTypes } from './actionTypes';
import { ApiPaths } from '../../utils/api/constants';
import { post } from '../../http';

export const SendPrivateMessage = (data: any) => post(ApiPaths.SendPrivateMessage, data);

export const PostPrivateMessage = (text: any) => ({
  type: ChatActionTypes.SendPrivateMessage,
  text,
});

export const PostPrivateMessageSuccess = (text:any) => ({
  type: ChatActionTypes.SendPrivateMessageSuccess,
  text,
});

export const PostPrivateMessageFail = (text: any) => ({
  type: ChatActionTypes.SendPrivateMessageFail,
  text,
});

export const SendMessage = (data: any) => post(ApiPaths.SendMessage, data);

export const PostMessage = (text: any) => ({
  type: ChatActionTypes.SendMessage,
  text,
});

export const PostMessageSuccess = (text:any) => ({
  type: ChatActionTypes.SendMessageSuccess,
  text,
});

export const PostMessageFail = (text: any) => ({
  type: ChatActionTypes.SendMessageFail,
  text,
});
