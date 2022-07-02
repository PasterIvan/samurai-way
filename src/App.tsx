import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from './Components/Users/UsersContainer';
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";



const App = () => {
    return (
            <div className={'app-wrapper'}>
                <HeaderContainer />
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends />}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
