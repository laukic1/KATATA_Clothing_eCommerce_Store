import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  PaymentContainer
} from "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import PaymentForm from "../../components/payment-form/payment-form.component.jsx";

const Checkout = () => {
  const { cartItems, checkoutPrice } = useContext(CartContext);

  return (
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

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
      <Total>
        <b>Total Price: {checkoutPrice}€</b>
      </Total>
      <PaymentContainer>
      <PaymentForm />
      </PaymentContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
