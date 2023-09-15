import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemImage,
  CheckoutDetails,
  QuantityCheckoutDetails,
  ValueCheckoutDetails,
  IncrementDecrementArrow,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const { incrementItem, decrementItem, removeItem } = useContext(CartContext);

  const incrementHandler = () => incrementItem(checkoutItem);
  const decrementHandler = () => decrementItem(checkoutItem);
  const removeHandler = () => removeItem(checkoutItem);

  const itemPriceSum = price * quantity;

  return (
    quantity >= 1 && (
      <CheckoutItemContainer>
        <ImageContainer>
          <CheckoutItemImage src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <CheckoutDetails>{name}</CheckoutDetails>
        <CheckoutDetails>
        <QuantityCheckoutDetails>
          <IncrementDecrementArrow onClick={decrementHandler}>
            &#8249;
          </IncrementDecrementArrow>
         <ValueCheckoutDetails>{quantity}</ValueCheckoutDetails> 
          <IncrementDecrementArrow onClick={incrementHandler}>
            &#8250;
          </IncrementDecrementArrow>
        </QuantityCheckoutDetails>
        </CheckoutDetails>
        <CheckoutDetails>{itemPriceSum}€</CheckoutDetails>
        <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    )
  );
};
export default CheckoutItem;
