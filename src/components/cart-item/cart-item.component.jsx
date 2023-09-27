//import styled components for styling
import {
  CartItemContainer,
  CartItemImage,
  ItemName,
  ItemDetails,
} from "./cart-item.styles.jsx";

//Component that renders item in the cart dropdown including image, name, quantity and price
const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;

  return (
    //Conditionally rendering component based on the quantity of the cart items in cart dropdown
    quantity >= 1 && (
      <CartItemContainer>
        <CartItemImage src={imageUrl} alt={`${name}`} />
        <ItemDetails>
          <ItemName>{name}</ItemName>
          <span className="price">
            {quantity} x €{price}
          </span>
        </ItemDetails>
      </CartItemContainer>
    )
  );
};

export default CartItem;
