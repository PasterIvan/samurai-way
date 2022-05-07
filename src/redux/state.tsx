import {v1} from "uuid";

let onChange = () => {
    console.log("state changed")
}

export const subscribe = (callback: ()=>void) => {
    onChange = callback;
}

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

export let state =  {
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
}

export const addPost = () => {
    const newPost = {id: v1(), message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    onChange();
}

export const changeNewPostText =(newText: string)=>{
    state.profilePage.newPostText=newText;
    onChange();
}

export const addMessage = () => {
    const newMessage = {id: v1(), text: state.dialogsPage.newMessage};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    onChange();
}

export const changeNewMessageText =(newMessageText: string)=>{
    state.dialogsPage.newMessage=newMessageText;
    onChange();
}