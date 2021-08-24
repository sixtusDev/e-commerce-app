// Import Statements //
// Modules
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// External Scripts
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { toggleCartItem } from "../../redux/cart/cart-actions";

// SVG
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Styles
import "./header.styles.scss";

const Header = ({ currentUser, toggleCartItem, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <div onClick={toggleCartItem}>
          <CartIcon />
        </div>
      </div>
      {hidden ? "" : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user, cartItems }) => ({
  currentUser: user.currentUser,
  hidden: cartItems.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartItem: () => dispatch(toggleCartItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
