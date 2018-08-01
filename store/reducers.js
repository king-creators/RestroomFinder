import {combineReducers} from 'redux'

// add new user
import {ADD_NEW_USER, ADD_RESTROOM, EDIT_RESTROOM} from './actionsType'

const newUserReducer = (state = {}, action)=>{
    switch(action.type){
        case ADD_NEW_USER:
            return action.payload
        default:
            return state;
        }
}

const restroomReducer = (state = {}, action)=>{
    switch(action.type){
        case ADD_RESTROOM:
            return action.payload
        case EDIT_RESTROOM:
            return action.payload
        default:
            return state;
        }
    }

const rootReducer = combineReducers({
    newUser : newUserReducer,
    restroom : restroomReducer
})

export default rootReducer
