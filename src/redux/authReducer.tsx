import {v1} from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export type DialogsType = {
    id: string
    name: string
    ava: string
}
export type MessageType = {
    id: string
    message: string
}
export type initialStateType = typeof initialState

export type SendNewMessageBodyACType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageBodyACType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    body: string
}
export type DialogsReducerActionType = SendNewMessageBodyACType | UpdateNewMessageBodyACType

let initialState = {
    userId: 2,
    email: 'sdfsdf',
    login: 'we',
    isFetching: true

}

export const dialogsReducer = (state: initialStateType = initialState, action: DialogsReducerActionType): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: v1(), message: state.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state
    }
}

export const sendNewMessageBodyAC = (): SendNewMessageBodyACType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyACType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})