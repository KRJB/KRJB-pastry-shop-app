import axios from 'axios'
import {ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,CART_EMPTY,ORDER_CREATE_FAIL,ORDERS_LIST_REQUEST,ORDERS_LIST_SUCCESS,ORDERS_LIST_FAIL} from "../constant/actionType"

//create Order and empty the cart
export const createOrder = (order) => async (dispatch) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
      const { data } = await axios.post('/api/order/create', order);
      dispatch({ 
          type: ORDER_CREATE_SUCCESS, 
          payload: data.response });
        
      dispatch({ type: CART_EMPTY});
      localStorage.removeItem('cartItems');
    } catch (error) {
        console.dir(error)
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  //For Admin : get all orders
export const getOrders = () => async(dispatch) => {
    dispatch({type: ORDERS_LIST_REQUEST})
    try {
         
        let result = await axios.get('/api/order')
        dispatch({
            type: ORDERS_LIST_SUCCESS,
            payload: result.data.result
        })
    } catch (error) {
    dispatch({type:ORDERS_LIST_FAIL,payload:error})
    console.log(error)
    }
}


