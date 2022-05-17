import './index.css';
import {store} from "./redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";

let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(renderTree);

renderTree();