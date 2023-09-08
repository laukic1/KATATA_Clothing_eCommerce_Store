import Button from '../button/button.component';
import './sign-in-form.styles.scss'
import React, { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGoogleRedirect,
  auth,
  signInAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";



import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInHandle = async (event) => {
        event.preventDefault();
        try {
          const response = await signInAuthWithEmailAndPassword(email, password);
          setFormFields(defaultFormFields)
    console.log(response);
        } catch (error) {
          if(error.code === "auth/user-not-found") {
            alert("Cannot sign in, user not found.")
          } else if (error.code === "auth/wrong-password") {
            alert("Incorrect email or password.")
          } else {
            console.log(error);
          }
        }
      }

      useEffect(() => {
        const logGoogleRedirectUser = async () => {
          try {
            const response = await getRedirectResult(auth);
            if (response) {
               await createUserDocumentFromAuth(response.user);
            } else {
              console.log("user not created");
            }
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
    <div className='sign-in-container'>
    <h2>Already have an account?</h2>
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
        <div className='buttons-container'>
       <Button type='submit'>Sign In</Button>
       <Button type='button' buttonType='google' onClick={signInWithGoogleRedirect}>Google Sign In</Button>
       </div>
      </form>
      
    </div>
  );
};

export default SignInForm;
