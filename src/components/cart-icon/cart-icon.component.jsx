//import styled components for styling
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

//import Hooks and context
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

//Component that renders cart icon with the count on top that represents the number of items that are in the cart
const CartIcon = () => {

  //destructuring cartCount= for incrementing or decrementing value based on the number of the items in cart
  //destructuring cartDropdown= for state value if cart is open or not
  // destructuring setCartDropdown= for toggling opened/closed of the cart dropdown component
  const { cartCount, cartDropdown, setCartDropdown } = useContext(CartContext)

  //Event that toggles open/close cart dropdown
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
