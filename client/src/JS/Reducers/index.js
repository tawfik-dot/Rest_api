import { combineReducers } from "redux";
import userReducer from "./Users";
import editReducer from "./Edit";
const rootReducer = combineReducers({ userReducer, editReducer });

export default rootReducer;
