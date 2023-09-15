import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, SignInTitle, ButtonsContainer } from "./sign-in-form.styles.jsx";
import React, { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGoogleRedirect,
  auth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInHandle = async (event) => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Cannot sign in, user not found.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect email or password.");
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const logGoogleRedirectUser = async () => {
      try {
        await getRedirectResult(auth);
      } catch (error) {
        console.error("Error", error);
      }
    };
    logGoogleRedirectUser();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Already have an account?</SignInTitle>
      <span>Sign in with your email and password.</span>
      <form onSubmit={signInHandle}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleRedirect}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
