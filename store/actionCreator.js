import {
  ADD_NEW_USER,
  ADD_RESTROOM,
  EDIT_RESTROOM,
  GET_USER,
  GOT_RESTROOM
} from "./actionsType";

// export const addNewUser = newUser => {
//   return {
//     type: ADD_NEW_USER,
//     payload: newUser
//   };
// };

// export const addNewRestroom = newRestroom => {
//   return {
//     type: ADD_RESTROOM,
//     payload: newRestroom
//   };
// };

// export const editRestroom = restroom => {
//   return {
//     type: EDIT_RESTROOM,
//     payload: restroom
//   };
// };

// export const getUser = user => ({ type: GET_USER, user });

export const gotRestrooms = payload => ({type: GOT_RESTROOM, payload})
