//Reducers are used to store the new state in redux
//Reducer are who actually change the state of the application
//This file will combine users and messages reducers into one single file
import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import header from "./header";

const chat = combineReducers({
  messages,
  users,
  header
});

export default chat;