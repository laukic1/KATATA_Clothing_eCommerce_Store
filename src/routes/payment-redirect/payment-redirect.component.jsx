// Import styled components for styling
import {
  CheckoutContainer,
  RedirectTite
} from "./payment-redirect.styles.jsx";

// Component is displayed after user made a successful payment
const PaymentRedirect = () => {
  

  return (
    <CheckoutContainer>

      <RedirectTite>Payment Successful!</RedirectTite>
      <p>Great news!</p>
      <span>Your order has been confirmed, products will be shipped on the next working day. </span>
      <br />
      <span>Thank you for choosing us, and we look forward delivering your items to you!</span>
    </CheckoutContainer>
  );
};

export default PaymentRedirect;
