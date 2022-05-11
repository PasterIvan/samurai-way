import {v1} from "uuid";
import {ACType, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ACType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {id: v1(), text: action.newMessage};
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessage = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageAC = (newMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessage: newMessage
    } as const
}

export const changeNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
}