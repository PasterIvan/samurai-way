import './index.css';
import {store, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let renderTree = () => {
    ReactDOM.render(<App state={store.getState()}
                         addPost={store.addPost.bind(store)}
                         changeNewPostText={store.changeNewPostText.bind(store)}
                         addMessage = {store.addMessage.bind(store)}
                         changeNewMessageText={store.changeNewMessageText.bind(store)}
        />,
        document.getElementById('root')
    );
}

store.subscribe(renderTree);

renderTree();