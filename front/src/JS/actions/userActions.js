import { GET_USER_LOAD, GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "../constant/actionType"

import axios from 'axios'


//get user by id
export const getUser = (id) => async(dispatch) => {
    dispatch({type: GET_USER_LOAD})
    try {
       
        let result = await axios.get(`/api/user/${id}`)
        dispatch({
            type: GET_USER,
            payload: result.data.result
        })
    } catch (error) {
        console.dir(error)
        dispatch({type: GET_USER_FAIL})
    }
}
export const getUsers = () => async(dispatch) => {
    dispatch({type: GET_USER_LOAD})
    try {
        let result = await axios.get("/api/user/users")
        dispatch({
            type: GET_USER_SUCCESS, 
            payload: result.data.result
        })
    } catch (error) {
        dispatch({type: GET_USER_FAIL,payload:error})
        console.dir(error)
    }
}