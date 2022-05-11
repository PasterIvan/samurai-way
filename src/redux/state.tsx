import {v1} from "uuid";

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
    _onChange: ()=>void
    getState: () => StateType
    subscribe: (callback: ()=>void)=>void
    dispatch: (action: ACType)=>void
}

type changeNewMessageTextAC = {
    type: 'CHANGE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export type ACType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC>  | ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageTextAC>

export let store: StoreType = {
    _state:  {
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
                {id: v1(), name: 'Vasya', ava:'https://vjoy.cc/wp-content/uploads/2019/12/4wx8ecia-min.jpg'},
                {id: v1(), name: 'Kolya', ava:'https://meragor.com/files/styles//ava_800_800_wm/starnoff_23.jpg'},
                {id: v1(), name: 'Pasha', ava:'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: v1(), name: 'Lesha', ava:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'},
                {id: v1(), name: 'Misha', ava:'https://static.wikia.nocookie.net/0c9787f8-4011-4dbe-9ca0-44fafba10dec/scale-to-width/755'}
            ],
            messages: [
                {id: v1(), text: 'Hi'},
                {id: v1(), text: 'How are you?'},
                {id: v1(), text: 'OK'},
                {id: v1(), text: 'OK'},
            ]
        },
        /* sidebar: {
             friends: [
                 {id: v1(), name: 'Vasya', ava:'https://vjoy.cc/wp-content/uploads/2019/12/4wx8ecia-min.jpg'},
                 {id: v1(), name: 'Kolya', ava:'https://meragor.com/files/styles//ava_800_800_wm/starnoff_23.jpg'},
                 {id: v1(), name: 'Pasha', ava:'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
             ],
         }*/
    },
    _onChange () {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe (callback) {
        this._onChange = callback;
    },
    dispatch(action){
        if (action.type === 'ADD-POST') {
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange();
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText=action.newText;
            this._onChange();
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {id: v1(), text: action.newMessage};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._onChange();
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessage=action.newMessageText;
            this._onChange();
        }
            }
}

export const addPostAC = (newPostText: string)=>{
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const changeNewPostTextAC = (newText: string)=>{
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const addMessageAC = (newMessage: string)=>{
    return {
        type: 'ADD-MESSAGE',
        newMessage: newMessage
    } as const
}

export const changeNewMessageTextAC = (newMessageText: string)=>{
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
}