import {v1} from "uuid";
import {ACType, DialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
        newMessage: '',
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
        ],
        messages: [
            {id: v1(), text: 'Hi'},
            {id: v1(), text: 'How are you?'},
            {id: v1(), text: 'OK'},
            {id: v1(), text: 'OK'},
        ],

    }

export const dialogsReducer = (state: DialogsPageType = initialState, action: ACType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: v1(), text: action.newMessage};
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageAC = (newMessage: string) => {
    return {
        type: ADD_MESSAGE,
        newMessage: newMessage
    } as const
}

export const changeNewMessageTextAC = (newMessageText: string) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}