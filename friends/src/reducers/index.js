import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";

// This step might appear unnecessary with only one reducer but helps me keeping best practise in place for future applications.
export default combineReducers({ friendsReducer });