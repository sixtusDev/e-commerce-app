// Import Statements //
// Modules
import { combineReducers } from "redux";

// External Scripts
import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
});
