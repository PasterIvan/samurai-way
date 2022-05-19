import {v1} from 'uuid';

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    followed: boolean
    photoUrl: string
    fullName: string
    status: string
    location: LocationType
}

export type initialStateType = typeof initialState

export type FollowACType = {
    type: typeof FOLLOW
    userID: string
}

export type UnfollowACType = {
    type: typeof UNFOLLOW
    userID: string
}

export type setUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export type UsersReducerActionType = FollowACType | UnfollowACType | setUsersACType

let initialState = {
    users: [] as Array<UsersType>,

}

export const usersReducer = (state: initialStateType = initialState, action: UsersReducerActionType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID: string): FollowACType => ({type: FOLLOW, userID})
export const unfollowAC = (userID: string): UnfollowACType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: SET_USERS, users})