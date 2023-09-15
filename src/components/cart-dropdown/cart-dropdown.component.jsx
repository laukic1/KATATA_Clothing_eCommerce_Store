import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {!(cartItems.length === 0) && (
          <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        )}
      </CartItems>

      <EmptyMessage>
        {cartItems.length === 0 && "Your cart is empty"}
        {console.log(cartItems.length)}
      </EmptyMessage>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
