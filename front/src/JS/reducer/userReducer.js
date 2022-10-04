import { GET_USER_LOAD, GET_USER, GET_USER_FAIL,GET_USER_SUCCESS } from "../constant/actionType";

const initialState = {
    users: [],
    userLoding: true,
    errors: {},
    user: {},
}

export const userReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case GET_USER_LOAD:
            return {
               ...state,
               userLoding: true 
            }
            case GET_USER:
                return {
                    ...state,
                    user: payload
                }
        case GET_USER_FAIL:
            return {
                ...state,
                userLoding: false,
                errors: payload
            }    
            case GET_USER_SUCCESS:
                return {
                    ...state,
                    userLoding: false,
                    users: payload
                }
    
        default:
            return state
    }
}

