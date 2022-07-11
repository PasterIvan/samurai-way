import {v1} from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type initialStateType = typeof initialState

export type SendNewMessageBodyACType = ReturnType<typeof sendNewMessageBodyAC>

export type DialogsReducerAT = SendNewMessageBodyACType

let initialState = {
    dialogs: [
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Slava'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Yura'}
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Thanks'}
    ] as Array<MessageType>
}

export const dialogsReducer =
    (state: initialStateType = initialState, action: DialogsReducerAT): initialStateType => {
        switch (action.type) {
            case SEND_MESSAGE:
                let newMessage = {id: v1(), message: action.newMessageBody}
                return {
                    ...state,
                    messages: [...state.messages, newMessage],

                }
            default:
                return state
        }
    }

export const sendNewMessageBodyAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)