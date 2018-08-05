//imports 
import axios from "axios";
const path = "http://localhost:3000/api";

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


// //----------------------------------------------------------------
// //Actions creators
// //----------------------------------------------------------------
const gotRestrooms = payload => ({type: GOT_RESTROOM, payload})
const loading = () => ({type:LOADING})


// //----------------------------------------------------------------
// //Thunks
// //----------------------------------------------------------------

export const getRestroom = userLocation => async dispatch =>{
        try {
            console.log('here in thunks')
        const result = await axios.post(`${path}/restroom/`,userLocation)
        console.log(result.data)
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
    oneRestroom : {}
}

const restroomReducer = (state = initialstate, action) => {
    switch (action.type) {
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