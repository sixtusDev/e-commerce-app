// Import Statements //
// External Scripts
import cartTypes from "./cart-types";

export const toggleCartItem = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartTypes.addItem,
  payload: item,
});
