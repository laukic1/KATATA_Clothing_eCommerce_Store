import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGoogleRedirect,
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";



const SignIn = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //  const userDocRef = await createUserDocumentFromAuth(user);
  // };

  useEffect(() => {
    const logGoogleRedirectUser = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
        } else {
          console.log("user not created");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    logGoogleRedirectUser();
  }, []);

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google POPUP
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
