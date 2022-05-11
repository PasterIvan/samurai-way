import {v1} from "uuid";
import {ACType, ProfilePageType, StateType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ACType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const changeNewPostTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText: newText
    } as const
}