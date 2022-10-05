import {combineReducers, legacy_createStore} from "redux";
import {authReducer} from "./authReducer";

const reducers = combineReducers({
    auth: authReducer,
})

const store = legacy_createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

export default store

// @ts-ignore
window.store = store // for dev