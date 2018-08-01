import {addNewUser, addNewRestroom} from './actionCreator'
import axios from 'axios'

export const addUser = (user) =>{
    return async function (dispatch) {
       console.log(user)
    }
}

export const addRestroom = (restroom) => {
    return async (dispatch) => {
    const {data} = await axios.post('/', restroom)
    dispatch(addNewRestroom(data))
    }
}

export const updateRestroom = (restroom) => {
    return async (dispatch) => {
    const {data} = await axios.put('/', restroom)
    dispatch(addNewRestroom(data))
    }
}

