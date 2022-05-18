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
    dialogs: [
        {id: v1(), name: 'Vasya', ava: 'https://vjoy.cc/wp-content/uploads/2019/12/4wx8ecia-min.jpg'},
        {id: v1(), name: 'Kolya', ava: 'https://meragor.com/files/styles//ava_800_800_wm/starnoff_23.jpg'},
        {id: v1(), name: 'Pasha', ava: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
        {id: v1(), name: 'Lesha', ava: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'},
        {
            id: v1(),
            name: 'Misha',
            ava: 'https://static.wikia.nocookie.net/0c9787f8-4011-4dbe-9ca0-44fafba10dec/scale-to-width/755'
        }
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Thanks'}
    ] as Array<MessageType>,
    newMessageBody: ''
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