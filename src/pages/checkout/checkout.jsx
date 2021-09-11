import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";
<<<<<<< HEAD
import CheckoutItem from "../../components/checkout-item/checkout-item";
=======
import ChekoutItem from "../../components/checkout-item/checkout-item";
>>>>>>> 0bb109870e4fc2f03503e080a1cf05c48d194234

import "./checkout.scss";

const CheckoutPage = ({ cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
<<<<<<< HEAD
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
=======
      <ChekoutItem key={cartItem.id} cartItem={cartItem} />
>>>>>>> 0bb109870e4fc2f03503e080a1cf05c48d194234
    ))}
    <div className="total">TOTAL: $78</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
