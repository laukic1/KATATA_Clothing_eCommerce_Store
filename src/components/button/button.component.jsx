//import styled components for styling
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  SpinnerContainer
} from "./button.styles.jsx";

//custom object for different reusable button type styles
export const BUTTON_TYPE_CLASSES = {
  base: "base", //base button used for basic functionalities on website
  google: "google-sign-in", //google-sign-in button used for google SIGN IN
  inverted: "inverted", //inverted button used for add to cart button and checkout button
};

//Component representing button component that is reused on the website
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  //Conditionaly rednering loading effect when payment is processing. For that we are passing isLoading props which is the state of the payment process.
  return <CustomButton disabled={isLoading} {...otherProps}>{isLoading ? <SpinnerContainer /> : children}</CustomButton>;
};

export default Button;
