import axios from 'axios'
import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, USER_LOADING } from '../constant/actionType'





//register user

export const registerUser = (FormData)=>async(dispatch)=>{
    try {
        const res =await axios.post('/api/user/register',FormData)
        dispatch({type:REGISTER_USER,payload:res.data})
    } catch (error) {
        
    console.log(error)
    }
    }

//login user

export const loginUser = (FormData)=>async(dispatch)=>{
    try {
        const res =await axios.post('/api/user/login',FormData)
        dispatch({type:LOGIN_USER,payload:res.data})
    } catch (error) {
        
    console.log(error)
    }
}




export const getAuthUser =() => async(dispatch)=>{
    try {
        //headers
        const config = {
            headers :{
                "x-auth-token2" : localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/user/user',config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data 
        })

    } catch (error) {
        console.log(error)
    }
}

export const userLoading = ()=>(dispatch)=>{
    dispatch({
        type:USER_LOADING
    })
}

export const userLogout =()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
}