import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import {UsersContainer} from './Components/Users/UsersContainer';
import {Login} from "./Components/Login/Login";
import {Profile} from './Components/Profile/Profile';
import {useAppSelector} from "./hooks/hooks";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Header} from "./Components/Header/Header";


const App = () => {

    const authUserId = useAppSelector(state => state.auth.id)

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={"/profile/" + authUserId}/>}/>
                    <Route path="/profile/:userId" element={<Profile/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
