//import axios 
import axios from "axios";

//import paths
const path ='http://172.16.23.222:3000/api'
// const path = "http://localhost:3000/api";
// const path = "http://172.16.25.38:3000/api";

// //----------------------------------------------------------------
// //Constants 
// //----------------------------------------------------------------
const LOGIN = 'LOGIN'
const LOADING = 'LOADING'
const LOGOUT = 'LOGOUT'

// //----------------------------------------------------------------
// //Actions creators
// //----------------------------------------------------------------
const loggingIn = (payload) => ({type: LOGIN, payload})
const isloading = () => ({type: LOADING })
const logOut = () => ({type: LOGOUT}) 

// //----------------------------------------------------------------
// //Thunks
// //----------------------------------------------------------------
export const LogIn = (userInfo) => async dispatch => {
    try {
        dispatch(isloading())
        const {data} = await axios.post(`${path}/user`,userInfo)
        dispatch(loggingIn(data))
    } catch (error) {
        console.log(error) 
    }
}


export const LogOut = () => async dispatch => {
    try {
        dispatch(isLoading())
        
    } catch (error) {
        
    }
}

// //----------------------------------------------------------------
// //Reducers
// //----------------------------------------------------------------
const initialstate = {
    user : null,
    isLoggedIn : false,
    isLoading : false
}

const userReducer = (state = initialstate, action) => {
    switch (action.type){
        case LOGIN:
        return {
            ...state,
            user : action.payload,
            isLoggedIn: true,
            isLoading : false
        }
        case LOADING:
        return {
            ...state,
            isLoading : true
        }

        default:
        return state;
    }
}

export default userReducer