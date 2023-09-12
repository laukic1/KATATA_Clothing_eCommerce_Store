import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartDropdown, setCartDropdown } = useContext(CartContext)

  const toggleCart = () => {
    setCartDropdown(!cartDropdown);
  }

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
