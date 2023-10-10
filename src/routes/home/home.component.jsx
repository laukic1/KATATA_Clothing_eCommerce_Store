//Importing styled components for styling
import {
  HeroContainer,
  HeroImage,
  HeroSign,
  HeroOverlay,
  HeroTitle,
  StyledFontAwesomeDownArrow,
} from "./home.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import heroImg from '../../assets/hero.png';

// Importing SVG arrow icon for scrolling to section functionality
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//Importing hooks 
import { useEffect, Fragment, useRef } from "react";

//Importing outlet component for displaying relevant content
import { Outlet, Link } from "react-router-dom";

//importing relevant components for home route
import Directory from "../../components/directory/directory.component";
import BestSellersPreview from "../best-sellers-preview/best-sellers-preview.component";
//Component for rendering index page/homepage
const Home = () => {

  //useEffect used for scrolling to top when user refreshes the page
  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };
    scrollToTop();
  }, []);


  return (
    <Fragment>
      <Outlet />
      
      <HeroContainer>
      <HeroOverlay>
        <HeroImage src={heroImg}
          alt="hero-body1" />
       </HeroOverlay>
        <HeroTitle>KATATA CLOTHING</HeroTitle>
        <h2>UNISEX HATS</h2>
        {/* Arrow element used for scrolling behavior */}
        <HeroSign>
        
        <Link to='shop/hats'><Button
        buttonType={BUTTON_TYPE_CLASSES.base}
      >Shop Now</Button></Link></HeroSign>
       
       
     
       

      </HeroContainer>
    {/* Directory with reference prop passed for scrolling behavior */}
      <Directory />
      <BestSellersPreview />  
    </Fragment>
  );
};

export default Home;
