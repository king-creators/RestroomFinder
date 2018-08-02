import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import rootReducer from "./reducers";
import loggingMiddlewre from "redux-logger";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddlewre
  )
);

export default store;
