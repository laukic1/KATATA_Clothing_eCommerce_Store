//importing styled components for styling
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  PaymentContainer
} from "./checkout.styles.jsx";

//importing hooks and context to access to relevant data
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

//implorting components for checkout route
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component.jsx";

//Component displays cart items with incrementing, decrementing, delete and payment
const Checkout = () => {
  //Destructuring values for appropriate data to display
  const { cartItems, checkoutPrice } = useContext(CartContext);

  return (
    //Checkout form container
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span></span>
        </HeaderBlock>
      </CheckoutHeader>
    {/* Mapping through cartItems data to display item from context */}
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
      <Total>
      {/* Total price data from context */}
        <b>Total Price: {checkoutPrice}€</b>
      </Total>
      <PaymentContainer>
      <PaymentForm />
      </PaymentContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
