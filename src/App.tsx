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
import {StateType} from "./redux/state";
import {Friends} from "./Components/Friends/Friends";

export type AppPropsType = {
    state: StateType
    addPost: () => void
    changeNewPostText: (newText: string)=>void
    addMessage: ()=>void
    changeNewMessageText: (newMessageText: string)=>void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 changeNewPostText={props.changeNewPostText}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                 addMessage={props.addMessage}
                                                                 changeNewMessageText={props.changeNewMessageText}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
