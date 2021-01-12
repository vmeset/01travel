import store from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

export let rerenderEntireTree = (state) => {
    ReactDOM.render (
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe (rerenderEntireTree)