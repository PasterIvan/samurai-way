import {combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import { usersReducer } from './usersReducer';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type StoreType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)