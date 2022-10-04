import { combineReducers } from "redux";
import {productReducers} from"./productReducers"
import authreducer from"./authreducer"
import {shopReducer} from"./shopReducer"
import {orderReducer} from"./orderReducer"
import {userReducer} from"./userReducer"


export const rootReducer=combineReducers({productReducers,authreducer,cart:shopReducer,orderReducer,userReducer})

