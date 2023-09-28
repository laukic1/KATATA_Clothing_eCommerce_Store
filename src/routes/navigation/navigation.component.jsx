// Imported styled components for styling
import {
  SignOutLinkRed,
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

// Importing font awesome and SVG icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as KatataLogo } from "../../assets/katata-logo-white.svg";

// Importing Outlet component for rendering content
import { Outlet } from "react-router-dom";

// Importing user and cart context and hooks for user management and cart management
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

//Importing sign out functionality for users
import { signOutUser } from "../../utils/firebase/firebase.utils";

// Importing components for cart functionalities
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => {
  // destructuring value from user context for user state management
  const { currentUser } = useContext(UserContext);
  // destructuring value from cart context for cart management
  const { cartDropdown } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <KatataLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {/* <NavLink to="/">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </NavLink> */}

          {/* Conditionally rendering SIGN OUT nav link. If currentUser exists, meaning user is logged in the navbar should have nav link SIGN OUT in red color */}
          {/* Otherwise display faUser icon/ Which means user is logged off */}
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
        {/* If cartDropdown equals true render cart dropdown component */}
        {cartDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
