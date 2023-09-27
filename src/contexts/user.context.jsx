//import hooks
import { createContext, useState, useEffect } from "react";

//import firebase utilities methods
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//Provider manages user state so it detected if user is signed in or signed out.
export const UserProvider = ({ children }) => {

  // State for managing current state of the user
  const [currentUser, setCurrentUser] = useState(null);
  
  // useEffect that subscribes to authentiaction state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
     console.log(user)
     // If the user is authenticated, create or update the user document in the database.
      if (user) {
           createUserDocumentFromAuth(user);
      }
      // Set the current user in the component state.
      setCurrentUser(user);
    });

// Cleanup function to unsubscribe when the component is unmounted or dependencies change
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
