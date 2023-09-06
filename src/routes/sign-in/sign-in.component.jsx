import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  signInWithGoogleRedirect,
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google POPUP</button>
    </div>
  );
};

export default SignIn;
