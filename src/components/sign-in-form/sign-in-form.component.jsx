//import styled components for styling
import { SignInContainer, SignInTitle, ButtonsContainer } from "./sign-in-form.styles.jsx";

//import methods from firebase utils and firebase/auth that are handling user authentication
import {
  signInWithGoogleRedirect,
  auth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

//import hooks
import React, { useState, useEffect } from "react";

//import FormInput component for sign in authentication
import FormInput from "../form-input/form-input.component";

//import google icon SVG
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg'

//object with inital values of form inputs
const defaultFormFields = {
  email: "",
  password: "",
};

//Component that handles the information in input fields for user authentication with firebase database
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //sign in handler that asynchronously requests sign in authentication with email and password
  //if there is error it catches it and handles it based on the error code
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

  //with useEffect hook this function handles redirected sign in with google that is initiated when component mounts, that way user auth is retrieved when the user redirects from google back to the website
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

  //handles the change in input fields so that user can sign in with email and password which is passed to signInHandle method.
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
            <GoogleIcon />
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
