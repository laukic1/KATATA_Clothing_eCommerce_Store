//import styled components for styling
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
//import other components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

//import needed Hooks and Context
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

//Component that represents cart dropdown which containes all the items with price and quantity and checkout button at the bottom of the component
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  //Using useNavigate hook to redirect user to the checkout page
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
    {/* Mapping through cartItems stored in the CartContext */}
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

{/* Conditionally rendering checkout button if cartItem length is not 0 */}
        {!(cartItems.length === 0) && (
          <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        )}
      </CartItems>

{/* Conditonally rendering message that the cart is empty */}
      <EmptyMessage>
        {cartItems.length === 0 && "Your cart is empty"}
        {console.log(cartItems.length)}
      </EmptyMessage>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
