import {AppThunkType} from "./ReduxStore";
import {authAPI} from "../api/api";

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
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId:number, email:string, login:string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const)

export const getAuthUserData = (): AppThunkType => {
    return (dispatch) => {

        authAPI.getMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}