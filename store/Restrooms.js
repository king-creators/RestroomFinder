//imports 
import axios from "axios";
// const path = "http://localhost:3000/api";
const path ='http://172.16.26.248:3000/api'
// //----------------------------------------------------------------
// //Constants
// //----------------------------------------------------------------
import {
    ADD_NEW_USER,
    ADD_RESTROOM,
    EDIT_RESTROOM,
    GET_USER,
    GOT_RESTROOM
} from "./actionsType";
const LOADING = 'LOADING'
const USER_LOCATION = 'USER_LOCATION'


// //----------------------------------------------------------------
// //Actions creators
// //----------------------------------------------------------------
const gotRestrooms = payload => ({type: GOT_RESTROOM, payload})
const loading = () => ({type:LOADING})
const userLocationAction = (payload) => ({type: USER_LOCATION, payload})


// //----------------------------------------------------------------
// //Thunks
// //----------------------------------------------------------------

export const getRestroom = userLocation => async dispatch =>{
        try {

        dispatch(userLocationAction(userLocation))
        const result = await axios.post(`${path}/restroom/`,userLocation)
        dispatch(gotRestrooms(result.data))
        } catch (error) {
        console.log(error)
        }
    }

export const Loading = ()=> dispatch =>{
    try {
        console.log('loading')
        dispatch(loading())

    } catch (error) {
        console.log(error)
    }
}



// //----------------------------------------------------------------
// //Reducers
// //----------------------------------------------------------------
const initialstate = {
    allRestrooms : [],
    isLoading : false,
    oneRestroom : {},
    userCurrentLocation: null
}

const restroomReducer = (state = initialstate, action) => {
    switch (action.type) {
        case USER_LOCATION:
        return {
            ...state,
            userCurrentLocation : action.payload
        }
        case GOT_RESTROOM:
        return {
            ...state,
            allRestrooms : action.payload,
            isLoading : false
        }
        case LOADING:
        return {
            ...state,
            isLoading: true
        }
        default:
            return state;
        }
    };

export default restroomReducer