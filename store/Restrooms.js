//imports
import axios from "axios";
// const path = "http://localhost:3000/api";
const path ='http://172.16.23.222:3000/api' //prince 


// const path = "http://172.16.23.224:3000/api"; //Gini

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
const LOADING = "LOADING";
const USER_LOCATION = "USER_LOCATION";
const WAIT_TIME = "WAIT_TIME";
const GET_RATING = "GET_RATING";

// //----------------------------------------------------------------
// //Actions creators
// //----------------------------------------------------------------
const gotRestrooms = payload => ({ type: GOT_RESTROOM, payload });
const loading = () => ({ type: LOADING });
const userLocationAction = payload => ({ type: USER_LOCATION, payload });
const waitTime = payload => ({ type: WAIT_TIME, payload });
const rating = payload => ({ type: GET_RATING, payload });

// //----------------------------------------------------------------
// //Thunks
// //----------------------------------------------------------------

export const getRating = yelpId => async dispatch => {
  try {
    const result = await axios.post(`${path}/rating`, { yelpId: yelpId });
    dispatch(rating(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getWaitTime = yelpId => async dispatch => {
  try {
    const result = await axios.post(`${path}/restroom/waitTime`, {
      yelpId: yelpId
    });
    dispatch(waitTime(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getRestroom = userLocation => async dispatch => {
  try {
    dispatch(userLocationAction(userLocation));
    const result = await axios.post(`${path}/restroom/`, userLocation);
    dispatch(gotRestrooms(result.data));
  } catch (error) {
    console.log(error);
  }
};

export const Loading = () => dispatch => {
  try {
    console.log("loading");
    dispatch(loading());
  } catch (error) {
    console.log(error);
  }
};

// //----------------------------------------------------------------
// //Reducers
// //----------------------------------------------------------------
const initialstate = {
  allRestrooms: [],
  isLoading: false,
  oneRestroom: {},
  userCurrentLocation: null,
  restroomWaitTime: 0,
  restroomRating: 0
};

const restroomReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOCATION:
      return {
        ...state,
        userCurrentLocation: action.payload
      };
    case GOT_RESTROOM:
      return {
        ...state,
        allRestrooms: action.payload,
        isLoading: false 
      };
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case WAIT_TIME:
      return { ...state, restroomWaitTime: action.payload };
    case GET_RATING:
      return { ...state, restroomRating: action.payload };
    default:
      return state;
  }
};

export default restroomReducer;
