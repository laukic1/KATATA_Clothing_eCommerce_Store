import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as KatataLogo } from "../../assets/katata-logo-white.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  SignOutLinkRed,
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartDropdown } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <KatataLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              <SignOutLinkRed>SIGN OUT</SignOutLinkRed>
            </NavLink>
          ) : (
            <NavLink to="/auth">
              <FontAwesomeIcon className="user-icon" icon={faUser} size="lg" />
            </NavLink>
          )}
          <NavLink>
            <CartIcon />
          </NavLink>
        </NavLinks>
        {cartDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
