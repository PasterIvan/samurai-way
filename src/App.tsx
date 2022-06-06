import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import { UsersContainer } from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = () => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
