import {v1} from "uuid";
import {addPostAC, changeNewPostTextAC, profileReducer} from "./profileReducer";
import {addMessageAC, changeNewMessageTextAC, dialogsReducer} from "./dialogsReducer";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsType = {
    id: string
    name: string
    ava: string
}

export type MessageType = {
    id: string
    text: string
}

/*export type FriendsType = {
    id: string
    name: string
    ava: string
}*/

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

export type DialogsPageType = {
    newMessage: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _onChange: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ACType) => void
}

export type ACType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>

export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: v1(), message: "Hi, how are you?", likesCount: 2},
                {id: v1(), message: "It's my first post!", likesCount: 8},
            ]
        },
        dialogsPage: {
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

        },
        /* sidebar: {
             friends: [
                 {id: v1(), name: 'Vasya', ava:'https://vjoy.cc/wp-content/uploads/2019/12/4wx8ecia-min.jpg'},
                 {id: v1(), name: 'Kolya', ava:'https://meragor.com/files/styles//ava_800_800_wm/starnoff_23.jpg'},
                 {id: v1(), name: 'Pasha', ava:'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
             ],
         }*/
    },
    _onChange() {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange();
    }
}

