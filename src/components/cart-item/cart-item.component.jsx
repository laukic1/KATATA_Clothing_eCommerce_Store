import {
  CartItemContainer,
  CartItemImage,
  ItemName,
  ItemDetails,
} from "./cart-item.styles.jsx";

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;

  return (
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
