export enum ChatActionTypes {
  GetAllData = 'CHAT.GET_ALL_DATA',
  GetAllDataSuccess = 'CHAT.GET_ALL_DATA_SUCCESS',
  GetAllDataFail = 'CHAT.GET_ALL_DATA_FAIL',

  DeleteData = 'CHAT.DELETE_DATA',
  DeleteDataSuccess = 'CHAT.DELETE_DATA_SUCCESS',
  DeleteDataFail = 'CHAT.DELETE_DATA_FAIL',

  CreateMessage = 'CHAT.CREATE_MESSAGE',
  CreateMessageSuccess = 'CHAT.CREATE_MESSAGE_SUCCESS',
  CreateMessageFail = 'CHAT.CREATE_MESSAGE_FAIL',

  GetMessage = 'CHAT.GET_MESSAGE',
  GetMessageSuccess = 'CHAT.GET_MESSAGE',
  GetMessageFail = 'CHAT.GET_MESSAGE_FAIL',

  UpdateMessage = 'CHAT.UPDATE_MESSAGE',
  UpdateMessageSuccess = 'CHAT.UPDATE_MESSAGE_SUCCESS',
  UpdateMessageFail = 'CHAT.UPDATE_MESSAGE_FAIL',

  DeleteMessage = 'CHAT.DELETE_MESSAGE',
  DeleteMessageSuccess = 'CHAT.DELETE_MESSAGE_SUCCESS',
  DeleteMessageFail = 'CHAT.DELETE_MESSAGE_FAIL',

  SendMessage = 'CHAT.SEND_MESSAGE',
  SendMessageSuccess = 'CHAT.SEND_MESSAGE_SUCCESS',
  SendMessageFail = 'CHAT.SEND_MESSAGE_FAIL',
}
