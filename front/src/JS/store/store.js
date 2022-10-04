import { compose, legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import {rootReducer} from "../reducer/index"
 
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
const middleware = [thunk];



export const  store = createStore(
    rootReducer,
    INITIAL_STATE,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
