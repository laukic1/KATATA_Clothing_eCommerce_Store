import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { ReactComponent as KatataLogo } from "../../assets/katata-logo-white.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartDropdown } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <KatataLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </Link>
          {currentUser ? (
            <Link onClick={signOutUser} className="nav-link red" to="/auth">
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to='/auth'>
              <FontAwesomeIcon className="user-icon" icon={faUser} size="lg" />
            </Link>
          )}
          <Link className="nav-link">
          <CartIcon />
          </Link>
        </div>
       {cartDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
