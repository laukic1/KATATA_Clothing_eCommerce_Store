//import hooks
import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/create-action/create-action.utils";
//import firebase utilities methods
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const INITIAL_STATE = {
  currentUser: null,
};

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

//Provider manages user state so it detected if user is signed in or signed out.
export const UserProvider = ({ children }) => {
  // State for managing current state of the user

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) =>
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));


    const value = { currentUser, setCurrentUser };

  // useEffect that subscribes to authentiaction state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
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

  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
