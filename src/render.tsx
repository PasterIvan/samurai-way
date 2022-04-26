import {addMessage, addPost, changeNewMessageText, changeNewPostText, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: StateType) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         changeNewPostText={changeNewPostText}
                         addMessage = {addMessage}
                         changeNewMessageText={changeNewMessageText}

        />,
        document.getElementById('root')
    );
}