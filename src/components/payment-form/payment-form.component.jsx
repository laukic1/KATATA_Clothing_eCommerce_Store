import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { checkoutPrice } = useContext(CartContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { currentUser } = useContext(UserContext);

  const amount = checkoutPrice;

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log(submitError);
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(amount);
    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;
    const clientSecret = client_secret;

    const paymentResult = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://katata-fashion.netlify.app/redirect",
      },
    });
    console.log(response.paymentIntent);
    console.log(clientSecret);

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h3>Credit Card Payment:</h3>
        <PaymentElement />
        <br />
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
