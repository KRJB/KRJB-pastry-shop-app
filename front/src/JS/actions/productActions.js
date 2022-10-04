import axios from 'axios'
import { PRODUCT_FAIL, PRODUCT_LOAD, PRODUCT_SUCESS ,ADD_PRODUCT,PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL} from "../constant/actionType"


//Get all products

export const getProduct = ()=>async(dispatch)=>{
dispatch({type:PRODUCT_LOAD})
try {
    let result =await axios.get('/api/product')
    dispatch({type:PRODUCT_SUCESS,payload:result.data.result})
} catch (error) {
    dispatch({type:PRODUCT_FAIL,payload:error})
console.log(error)
}
}

//add product(admin)

export const addProduct = (FormData)=>async(dispatch)=>{
    
    try {
        const res =await axios.post('/api/product/name',FormData)
        dispatch({type:ADD_PRODUCT,payload:res.data})
    } catch (error) {
        
    console.log(error)
    }
    }


//delete product (admin)

export const deleteProduct = (id)=>async(dispatch)=>{
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: id });
    const { data } = await axios.delete(`/api/product/${id}` )
    try {
        dispatch({type:PRODUCT_DELETE_SUCCESS,payload:data.response})
    } catch (error) {
        dispatch({type:PRODUCT_DELETE_FAIL,payload: error.response.data.msg})
        
    console.log(error)
    }
    }
