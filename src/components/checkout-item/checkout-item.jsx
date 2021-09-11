<<<<<<< HEAD
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
=======
import { connect } from "react-redux";

import {
  clearItemFromCart,
  decrementItem,
  addItem,
} from "../../redux/cart/cart-actions";

import "./checkout-item.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  decrementItem,
  addItem,
}) => {
  const { imageUrl, cartItemname, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{cartItemname}</span>
      <span className="quantity">
        <div className="arror" onClick={() => decrementItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arror" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  decrementItem: (item) => dispatch(decrementItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
>>>>>>> 0bb109870e4fc2f03503e080a1cf05c48d194234
