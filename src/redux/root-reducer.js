// Import Statements //
// Modules
import { combineReducers } from "redux";

// External Scripts
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
