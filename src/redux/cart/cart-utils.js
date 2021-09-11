export const addItemToCart = (cartItems, cartItemToAdd) => {
  const item = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (item) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decrementItem = (cartItems, cartItemToDecrement) => {
  const item = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrement.id
  );
  return item.quantity === 1
    ? cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrement.id)
    : cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
          : cartItem
      );
};
