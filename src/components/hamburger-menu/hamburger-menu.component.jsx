import { LiItems, UlList } from "./hamburger-menu.styles";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ isOpen }) => {
  return (
    <UlList isOpen={isOpen}>
      <Link to="/shop/hats">
        <LiItems>Hats</LiItems>
      </Link>
      <Link to="/shop/jackets">
        <LiItems>Jackets</LiItems>
      </Link>
      <Link to="/shop/sneakers">
        <LiItems>Sneakers</LiItems>
      </Link>

      <Link to="/shop/womens">
        <LiItems>Womens</LiItems>
      </Link>
      <Link to="/shop/mens">
        <LiItems>Mens</LiItems>
      </Link>
      <Link to="/shop">
        <LiItems style={{ fontWeight: "bold" }}>Shop All</LiItems>
      </Link>
    </UlList>
  );
};

export default HamburgerMenu;
