//import styled components for styling
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

//import context hook and coresponding cart context for context and state tracking
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


// Component that renders each cart item from cart dropdown in to this component where it is called checkout item, it displays all of the tracked value from state and stored context
const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const { incrementItem, decrementItem, removeItem } = useContext(CartContext);

  // event handler that increments the value of targeted item;
  const incrementHandler = () => incrementItem(checkoutItem);

  // event handler that decrements the value of targeted item;
  const decrementHandler = () => decrementItem(checkoutItem);

  // event handler that removes the targeted item from checkout
  const removeHandler = () => removeItem(checkoutItem);

  // Total price of each individual item - *NOT THE TOTAL PRICE OF ALL OF THE ITEMS*
  const itemPriceSum = price * quantity;

  return (
    // Conditionally rendering component based on the quantity of the items
    quantity >= 1 && (
      
      <CheckoutItemContainer>

    {/* Checkout item image container */}
        <ImageContainer>
          <CheckoutItemImage src={imageUrl} alt={`${name}`} />
        </ImageContainer>

        {/* Checkout item name container */}
        <CheckoutDetails>{name}</CheckoutDetails>
        
        <CheckoutDetails>
        {/* Checkout item quantity container with quantity value and increment arrow and decrement arrow event handlers */}
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

        {/* Checkout item total price */}
        <CheckoutDetails>{itemPriceSum}€</CheckoutDetails>
       
       {/* Checkout item remove button */}
        <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
      
      
    )
  );
};
export default CheckoutItem;
