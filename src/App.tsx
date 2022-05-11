import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {ACType, StateType} from "./redux/state";
import {Friends} from "./Components/Friends/Friends";

export type AppPropsType = {
    state: StateType
    dispatch: (action:ACType)=>void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                 dispatch={props.dispatch}/>}/>
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
