import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer, ProfileReducerActionType} from './profileReducer';
import {dialogsReducer, DialogsReducerAT} from './dialogsReducer';
import {usersReducer, UsersReducerActionType} from './usersReducer';
import {authReducer, AuthReducerActionType} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from "redux-form";

export type AppActionsType = UsersReducerActionType | ProfileReducerActionType
    | DialogsReducerAT | AuthReducerActionType | FormAction

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsType>

export type AppDispatch = ThunkDispatch<StoreType, unknown, AppActionsType>

export type StoreType = ReturnType<typeof rootReducers>

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))