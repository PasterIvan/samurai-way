import {v1} from "uuid";
import {ACType, ProfilePageType, StateType} from "./store";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
    newPostText: '',
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 2},
        {id: v1(), message: "It's my first post!", likesCount: 8},
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ACType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const changeNewPostTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
}