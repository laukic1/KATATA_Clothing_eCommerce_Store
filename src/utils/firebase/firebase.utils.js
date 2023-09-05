import { initializeApp } from "firebase/app";
import {
  getAuth,
  
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY1R0ekUr1j6010qQsUERdCUmiDN5dgso",
  authDomain: "katata-db.firebaseapp.com",
  projectId: "katata-db",
  storageBucket: "katata-db.appspot.com",
  messagingSenderId: "882322308050",
  appId: "1:882322308050:web:c252a84df27386b996e60b",
};

// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
