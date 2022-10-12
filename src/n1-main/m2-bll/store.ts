import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {AuthActionsType, authReducer} from "./authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export type AppActionsType = AuthActionsType

export default store

// @ts-ignore
window.store = store // for dev