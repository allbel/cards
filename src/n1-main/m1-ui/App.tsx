import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Main from "./main/Main";
import store from "../m2-bll/store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
