import { combineReducers } from "redux";
import restroomReducer from './Restrooms'

const rootReducer = combineReducers({
  restroom: restroomReducer
});


export default rootReducer;
