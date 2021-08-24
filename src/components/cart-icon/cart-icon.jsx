// Import Statements //
// Modules
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

// Styles
import "./cart-icon.scss";

// SVG
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ itemCount }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
