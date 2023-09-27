//import hooks 
import { createContext, useState, useEffect } from "react";

// import method from firebase utilities for fetching the database data
import {
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

// This provider retrieves and returns the categories and associated documents from firebase
export const CategoriesProvider = ({ children }) => {

  // State for managing categories content
  const [categoriesMap, setCategoriesMap] = useState({});

  //useEffect asynchronously gets content(categories and products).
  //it stores it in the variable categoryMap which is then set as categoriesMap state value
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
