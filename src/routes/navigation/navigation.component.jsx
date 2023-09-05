import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import { ReactComponent as KatataLogo } from '../../assets/katata-logo-white.svg';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
          <KatataLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/shop'>
                ABOUT
            </Link>
            <Link className='nav-link' to='/shop'>
                CONTACT
            </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;