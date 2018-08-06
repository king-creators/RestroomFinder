import { combineReducers } from "redux";
import restroomReducer from './Restrooms'
import userReducer from './User'

const rootReducer = combineReducers({
  restroom: restroomReducer,
  user: userReducer
});


export default rootReducer;
