import { addNewUser, addNewRestroom, getUser, gotRestrooms } from "./actionCreator";
import axios from "axios";

const path = "http://localhost:3000/api";

// export const addUser = user => {
//   return async dispatch => {
//     try {
//       const { data } = await axios.post(`${path}/user`, user);
//       dispatch(addNewUser(data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

// export const addRestroom = restroom => {
//   return async dispatch => {
//     const { data } = await axios.post("/", restroom);
//     dispatch(addNewRestroom(data));
//   };
// };

// export const updateRestroom = restroom => {
//   return async dispatch => {
//     const { data } = await axios.put("/", restroom);
//     dispatch(addNewRestroom(data));
//   };
// };

// export const auth = userData => async dispatch => {
//   try {
//     const res = await axios.put(`${path}/user/login`, userData);
//     console.log(res.data);
//     dispatch(getUser(res.data));
//   } catch (authError) {
//     return dispatch(getUser({ error: authError }));
//   }
// };
//-----------------------------------------------------------------------
//get restroom data 
export const getRestroom = userlocation => async dispatch =>{
  try {
    const result = await axios.get(`${path}/restroom/`)
    dispatch(gotRestrooms(result.data))
  } catch (error) {
    console.log(error)
  }
}