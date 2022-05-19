import {v1} from 'uuid';

export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type AddPostACType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}
export type ProfileReducerActionType = AddPostACType | UpdateNewPostTextACType

export type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: v1(), message: 'Its my first post', likesCount: 32},
        {id: v1(), message: 'Its my second post', likesCount: 54}
    ] as Array<PostType>,
    newPostText: ''
}

export const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionType): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}
export const addPostAC = (): AddPostACType => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextACType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})