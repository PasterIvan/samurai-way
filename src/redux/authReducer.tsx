export const SET_USER_DATA = 'SET_USER_DATA';

export type initialStateType = typeof initialState

export type setAuthUserDataAT = ReturnType<typeof setAuthUserData>
export type AuthReducerActionType = setAuthUserDataAT

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: initialStateType = initialState, action: AuthReducerActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId:string, email:string, login:string) => ({type: SET_USER_DATA, data: {userId, email, login}} as const)