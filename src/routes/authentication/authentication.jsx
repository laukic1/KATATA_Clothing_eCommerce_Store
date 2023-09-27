//import styled components for styles
import {
  AuthContainer,
  SignInFormContainer,
  SignUpFormContainer,
} from "./authentication.styles.jsx";

//import sign up and sign in components
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInFormContainer>
        <SignInForm />
      </SignInFormContainer>
      <SignUpFormContainer>
        <SignUpForm />
      </SignUpFormContainer>
    </AuthContainer>
  );
};

export default Authentication;
