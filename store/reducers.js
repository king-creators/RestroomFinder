import { combineReducers } from "redux";
import restroomReducer from './Restrooms'
// // add new user
// import {
//   ADD_NEW_USER,
//   ADD_RESTROOM,
//   EDIT_RESTROOM,
//   GET_USER,
//   GOT_RESTROOM
// } from "./actionsType";

// const newUserReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ADD_NEW_USER:
//       return action.payload;
//     case GET_USER:
//       return action.user;
//     default:
//       return state;
//   }
// };

// const restroomReducer = (state = [], action) => {
//   switch (action.type) {
//     case GOT_RESTROOM:
//     return action.payload
//     // case ADD_RESTROOM:
//     //   return action.payload;
//     // case EDIT_RESTROOM: 
//     //   return action.payload;
//     default:
//       return state;
//   }
// }; 



const rootReducer = combineReducers({
  restroom: restroomReducer
});


export default rootReducer;
