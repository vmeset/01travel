import store from './state/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

export let rerenderEntireTree = (state) => {
    ReactDOM.render (
        <BrowserRouter>
            <App td={state.toursData} clients={state.clients} 
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root')        
    )
}

rerenderEntireTree(store.getState())

store.subscribe (rerenderEntireTree)