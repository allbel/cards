import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof reducers>

export default store

// @ts-ignore
window.store = store // for dev