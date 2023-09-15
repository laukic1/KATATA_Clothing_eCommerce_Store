import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartCount, cartDropdown, setCartDropdown } = useContext(CartContext)

  const toggleCart = () => {
    setCartDropdown(!cartDropdown);
  }


  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
