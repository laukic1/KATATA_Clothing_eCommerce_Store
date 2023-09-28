// Importing styles
import "./footer.styles.scss";

import { Fragment } from "react";

// Importing Outlet component for relevant data rendering
import { Outlet } from "react-router-dom";

// Importing useNavigate hook for routing
import { useNavigate } from "react-router-dom";

//Array of objects primarly used for footer links
const categoryLinks = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/ngBFFNc/category-img-hats.png",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/frmRwL6/category-img-jackets.png",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/fG61Cx6/category-img-sneakers.png",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/YfYsX1c/category-img-womens.png",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/stD9GTB/category-img-mens.png",
    route: 'shop/mens'
  },
  {
    id: 6,
    title: "best sellers",
    route: 'shop/best sellers'
  }
];


// Component that renders footer of the website
const Footer = () => {
  // Storing hook inside footerNavigate
  const footerNavigate = useNavigate();

  // Route handler
  const footerNavigateHandler = (route) => footerNavigate(route);

  return (
    <Fragment>
      <Outlet />
      <div className="footer-container">
        <div className="utility-row">
          <div className="column">
            <h3>Help & Information </h3>
            <span>Delivery</span>
            <span>Returns</span>
            <span>FAQ</span>
          </div>
          <div className="column">
            <h3>About KATATA</h3>
            <span>About us</span>
            <span>Who we are</span>
            <span>Our Journey</span>
          </div>
          <div className="column">
            <h3>Shop</h3>
            {/* Mapping through categoryLinks array, and then displaying title of objects which are routing to coresponding category products */}
            {
              categoryLinks.map((item) => {
               return <span className='footer-link' onClick={() => footerNavigateHandler(item.route)} key={item.id}>{item.title}</span>
              })
            }
            
            
          </div>
        </div>
        <div className="payment-row">
        <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/stripe.png" alt="stripe"/>
        <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/visa.png" alt="visa"/>
        <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/mastercard.png" alt="mastercard"/>
        </div>
        <div className="copyright-row">
            <span>Copyright(C) KATATA Clothing</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
