import { combineReducers } from "redux";
import { userReducers } from "./userReducers";

const reducers = combineReducers({
  allusers: userReducers,
});

export default reducers;
