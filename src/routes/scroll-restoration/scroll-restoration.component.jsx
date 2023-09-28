// Importing hook useEffect and useLocation 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

  // Destructuriong pathname from useLocation(), 
  // useLocation is a hook provided by React Router that return the current location object 
    const { pathname } = useLocation();
  
    useEffect(() => {
      // Effect runs whenever the pathname changes
      window.scrollTo(0, 0)
    }, [pathname]);
  
    // Component return null. It doesnt render any visible content, it is just a function
    return null;
  }

  export default ScrollToTop;