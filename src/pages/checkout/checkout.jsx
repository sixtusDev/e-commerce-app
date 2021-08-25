import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./checkout.scss";

const CheckoutPage = () => (
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
    <div className="total">TOTAL: $78</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
