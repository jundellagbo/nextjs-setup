import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import increments from '@redux/reducers/increment'
import todo from '@redux/reducers/todo'
import auth from '@redux/reducers/auth'
import { persistReducer } from "redux-persist";


import storage from 'redux-persist/lib/storage'
import localForage from 'localforage'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'

const lsconfig = key => ({
    key,
    storage
})

const lfconfig = key => ({
    key,
    storage: localForage
})

const cookieconfig = key => ({
    key,
    storage: new CookieStorage(Cookies)
})

export const reduxStore = () => {
    return createStore(
        combineReducers({
            increments: persistReducer(lsconfig(`increments`), increments),
            todo: persistReducer(lfconfig(`todo`), todo),
            auth: persistReducer(cookieconfig(`auth`), auth)
        }),
        {},
        applyMiddleware(
            thunk, 
            promise
        )
    )
}