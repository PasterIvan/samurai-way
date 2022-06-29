import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer, ProfileReducerActionType} from './profileReducer';
import {dialogsReducer, DialogsReducerActionType} from './dialogsReducer';
import {usersReducer, UsersReducerActionType} from './usersReducer';
import {authReducer, AuthReducerActionType} from "./authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'

export type AppActionsType = UsersReducerActionType | ProfileReducerActionType | DialogsReducerActionType | AuthReducerActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsType>

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type StoreType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))