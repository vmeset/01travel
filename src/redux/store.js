import {combineReducers, createStore} from "redux";
import itemReducer from "./item-reducer";

let reducers = combineReducers({
    items: itemReducer
})

const store = createStore(reducers)

window.store = store

export default store