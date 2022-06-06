import {v1} from 'uuid';

export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type AddPostACType = ReturnType<typeof addPost>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostText>
export type setUserProfileACType = ReturnType<typeof setUserProfile>

export type ProfileReducerActionType = AddPostACType | UpdateNewPostTextACType | setUserProfileACType

export type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: v1(), message: 'Its my first post', likesCount: 32},
        {id: v1(), message: 'Its my second post', likesCount: 54}
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        userId: NaN,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    }
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)