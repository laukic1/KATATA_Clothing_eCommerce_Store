import {
  CheckoutContainer,
} from "./payment-redirect.styles.jsx";

const PaymentRedirect = () => {
  

  return (
    <CheckoutContainer>

      <h2>Payment Successful!</h2>
      <p>Great news!</p>
      <span>Your order has been confirmed, products will be shipped on the next working day. </span>
      <br />
      <span>Thank you for choosing us, and we look forward delivering your items to you!</span>
    </CheckoutContainer>
  );
};

export default PaymentRedirect;
