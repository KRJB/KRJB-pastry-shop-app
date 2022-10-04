import { ADD_TO_CART,REMOVE_FROM_CART} from "../constant/actionType"
import axios from 'axios'

export const addToCart = (id,qty) => async(dispatch, getState)=>{
  const res  = await axios.get(`/api/product/${id}`);
try {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      _id: res.data.result._id,
      name: res.data.result.name,
      image: res.data.result.image,
      price: res.data.result.price,
      qty,
    }})   ;
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error)
  
}
}

export const removeFromCart = (id) => (dispatch, getState) => {

  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));


};

