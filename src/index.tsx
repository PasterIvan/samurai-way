import './index.css';
import {addMessage, addPost, changeNewMessageText, changeNewPostText, state, StateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let renderTree = () => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         changeNewPostText={changeNewPostText}
                         addMessage = {addMessage}
                         changeNewMessageText={changeNewMessageText}
        />,
        document.getElementById('root')
    );
}

subscribe(renderTree);

renderTree();