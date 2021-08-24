// Import Statements //
// External Scripts
import cartTypes from "./cart-types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.addItem:
      return {
        ...state,
        cardItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
