import { PRODUCT_FAIL, PRODUCT_LOAD, PRODUCT_SUCESS ,ADD_PRODUCT,PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL} from "../constant/actionType"



const initialState ={
    prod:{},
    products:[],
    loadProducts:false,
    error:[]
}
export const productReducers=(state=initialState,{type,payload})=>{
   
    switch (type) {
        case PRODUCT_LOAD:
            return{...state,loadProducts:true}
        case PRODUCT_SUCESS:
            return{...state,products:payload,loadProducts:false}
        case ADD_PRODUCT:
            return{...state,product:payload,loadProducts:false}
        case PRODUCT_FAIL:
            return{...state,loadProducts:false,error:payload}
        case PRODUCT_DELETE_REQUEST:
            return {...state, loadProducts: true };
        case PRODUCT_DELETE_SUCCESS:
            return {...state, loadProducts: false, prod: payload };
        case PRODUCT_DELETE_FAIL:
            return {...state, loadProducts: false, error: payload };
    
        default:
            return state
    }
}
