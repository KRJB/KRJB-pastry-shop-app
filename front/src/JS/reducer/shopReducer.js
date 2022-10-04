import { ADD_TO_CART,REMOVE_FROM_CART,CART_EMPTY} from "../constant/actionType"



const initialState = {
  cartItems: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        return { ...state,cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ), 
        };
      } else {
        return {...state,
          cartItems: [...state.cartItems, item],
        };
      }
    

      case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };

      case CART_EMPTY:
            return {
                ...state,
                isLoading: false,
                cartItems: []
            }
    
    default:
      return state;
  }
};

