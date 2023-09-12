import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartItems.length > 0 && <Button>CHECKOUT</Button>}
      </div>

      <span className="empty-message">
        {cartItems.length === 0 && "Your cart is empty"}
      </span>
    </div>
  );
};
export default CartDropdown;
