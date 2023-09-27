//import styled components for styles
import {SignUpContainer, SignUpTitle } from './sign-up-form.styles.jsx'

//import button component
import Button from '../button/button.component';

//import form input for registration
import FormInput from "../form-input/form-input.component";

//import firebase methods for creating new user in database
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

//import hooks and context
import { useState, useContext } from "react";
import { UserContext } from '../../contexts/user.context';

//stored initial values of input fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

//Component that recieves and passes the information of input fields to firebase.
//It then checks if the user is found if not it creates new instance of the user and signs him in.
const SignUpForm = () => {
  //value from context that sets current user value(if the current user is signed out it is null)
  const { setCurrentUser } = useContext(UserContext);
  
  //state management for formfields
  const [formFields, setFormFields] = useState(defaultFormFields);

  //destructured formFields values. We pass them to firebase utils for user creation if it doesnt exists.
  const { displayName, email, password, confirmPassword } = formFields;

  //after registration processing the forms reset so they are empty again
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //event handler that performs user registration, which creates new instance of the user in firebase database.
  const handleSubmit = async (event) => {
    event.preventDefault();

    //if password is not equal with confirm password, user gets prompted with alert.
    //if everything matches it proceeds.
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    //In the try block we destructure user from the submit response. 
     //We store the method with appropriate value passed from input fields as attributes.
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        displayName,
        email,
        password
      );

      //We set the current user with the user we get back from createAuthUserWithEmailAndPassword.
      setCurrentUser(user);
      //Then we reset form fields and we are practically signed in.
      resetFormFields();

      //The last step is creating new user instance in database which got passed the user and the displayName which will be visible in the database of firebase.
      await createUserDocumentFromAuth(user, { displayName });
      
      //If there are any errors in the process, the user will get allerted that it can't create new user instance because it is already created.
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannot create user, email already in use.");
    }
  };

  //handles the change in input fields so that user can sign in with email and password which is passed to submitHandle method.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
    <SignUpTitle>Don't have an account?</SignUpTitle>
      <span>Create a new account to recieve better deals.</span>
      <form onSubmit={handleSubmit}>
      <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      
    </SignUpContainer>
  );
};

export default SignUpForm;
