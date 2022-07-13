import {AppThunkType} from "./ReduxStore";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'SET_USER_DATA';

export type initialStateType = typeof initialState

export type setAuthUserDataAT = ReturnType<typeof setAuthUserData>
export type AuthReducerActionType = setAuthUserDataAT

let initialState = {
    id: 24182,
    email: 'paster-ivan@yandex.by',
    login: 'PasterIvan',
    isAuth: false,
}

export const authReducer = (state: initialStateType = initialState, action: AuthReducerActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//AC
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const)

//THUNKS
export const getAuthUserData = (): AppThunkType => async dispatch => {
    const res = await authAPI.getMe()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}