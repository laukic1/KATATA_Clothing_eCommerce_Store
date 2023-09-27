//import styled components for styling
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

//import stripe methods for payment processing
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

//import custom button component
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

//import hooks and contexts for payment amount and user indication
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

// Component that displays PaymentElement component that stored the information which is then used for payment processing when user click on the pay now button!
const PaymentForm = () => {
  //Store stripe methods inside constants
  const stripe = useStripe();
  const elements = useElements();
  
  //initiate state for payment processing
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  //cart context for total checkout price for stripe payment amount variable
  const { checkoutPrice } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const amount = checkoutPrice;

  // Event handler for payments
  const paymentHandler = async (e) => {
    e.preventDefault();

    //if stripe method and elements are not recieved successfuly it exits the whole function
    if (!stripe || !elements) {
      return;
    }

    //if they are recieved it intiates the state of payment process
    setIsProcessingPayment(true);

    //elements is used for handling secure input fields, which then calls submit that initiates the payment processing.
    //if the submitError occurs it console logs error and then returns and exits the payment processing, otherwise it continues.
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log(submitError);
      return;
    }

    //this part is making asynchronous request to a serverless function with fetch API that is responsible for creating payment intent with specified amount.
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      //amount is multiplied with 100 to convert it to smaller unit 
      body: JSON.stringify({ amount: amount * 100 }),
    })
    //response is converted to JSON
    .then((res) => res.json());
    console.log(amount);
    console.log(response);
    //destrocturing paymenIntent to gain client_secret which is later used
    const {
      paymentIntent: { client_secret },
    } = response;
    const clientSecret = client_secret;

    //storing confirmed payment that when the payment has been successful it redirects user to payment confirmation page.
    const paymentResult = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://katata-fashion.netlify.app/redirect",
      },
    });
    console.log(response.paymentIntent);
    console.log(clientSecret);

    //changed the staste of the payment processing to false since it has been executed
    setIsProcessingPayment(false);

    //if something happend durring the payment process this part of code will handle all of the errors
    //if nothing was detected it allerts payment successful
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    //Payment form container where users input their information
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
