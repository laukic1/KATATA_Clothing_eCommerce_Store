import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { ReactComponent as KatataLogo } from "../../assets/katata-logo-white.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <KatataLogo className="logo" />
        </Link>
        <div className="nav-links-container">
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
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/shop">
            ABOUT
          </Link>
          <Link className="nav-link" to="/shop">
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
