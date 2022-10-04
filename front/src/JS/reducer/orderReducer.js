import {ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL,ORDERS_LIST_REQUEST,ORDERS_LIST_SUCCESS,ORDERS_LIST_FAIL} from "../constant/actionType"


const initialState = {
    orders: [],
    loading: false,
    order: {},
    error: null,
    success: null,
}

export const orderReducer = (state = initialState, {type, payload}) => {
switch (type) {
  case ORDER_CREATE_REQUEST:
        return { 
            ...state,
            loading: true 
        }
    case ORDERS_LIST_REQUEST:
        return { 
            ...state,
            loading: true 
        }


  case ORDER_CREATE_SUCCESS:
        return { 
            ...state,
            loading: false, 
            success: true, 
            order: payload 
        }

    case ORDERS_LIST_SUCCESS:
        return { 
            ...state,
            loading: false, 
            orders:payload
        }

    
  case ORDER_CREATE_FAIL:
        return { 
            ...state,
            loading: false, 
            error: payload 
        }
    case ORDERS_LIST_FAIL:
        return { 
            ...state,
            loading: false, 
            error: payload 
        }


  default:
    return state;
}
}