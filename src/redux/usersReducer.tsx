import {userAPI} from "../api/api";
import {AppThunkType} from "./ReduxStore";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export type initialStateType = typeof initialState

export type FollowACType = ReturnType<typeof followSuccess>
export type UnfollowACType = ReturnType<typeof unfollowSuccess>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>

export type UsersReducerActionType =
    FollowACType | UnfollowACType | setUsersACType | setCurrentPageACType
    | setTotalUsersCountACType | toggleIsFetchingACType | toggleFollowingProgressACType

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
} as const)

export const getUsers = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true))

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (id: number): AppThunkType => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, id))
        userAPI.follow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

export const unfollow = (id: number): AppThunkType => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, id))
        userAPI.unfollow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}
