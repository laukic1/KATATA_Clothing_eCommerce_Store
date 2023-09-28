//Importing styled components for styling
import {
  HeroContainer,
  HeroImage,
  HeroBodyImg,
  HeroBodyImg2,
  HeroTitle,
  StyledFontAwesomeDownArrow,
} from "./home.styles";

// Importing SVG arrow icon for scrolling to section functionality
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//Importing hooks 
import { useEffect, Fragment, useRef } from "react";

//Importing outlet component for displaying relevant content
import { Outlet } from "react-router-dom";

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

// useRef is used to create a reference to a DOM element, initially set to null
  const catSectionRef = useRef(null)

// It checks if catSectionRef.current is truthy, if it is it scrolls into view smoothly
  const scrollToSection = () => {
    if(catSectionRef.current) {
      catSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <Fragment>
      <Outlet />
      <HeroContainer>
        <HeroImage />
        <HeroBodyImg
          src="https://i.ibb.co/StxB6dq/hero-img-min-3.png"
          alt="hero-body"
        />
        <HeroBodyImg2
          src="https://i.ibb.co/bR3fg55/hero-img-min2.png"
          alt="hero-body"
        />
        <HeroTitle>KATATA CLOTHING</HeroTitle>
        {/* Arrow element used for scrolling behavior */}
        <StyledFontAwesomeDownArrow
          icon={faAngleDown}
          size="2xl"
          style={{ color: "#000000" }}
          onClick={scrollToSection}
        />
      </HeroContainer>
    {/* Directory with reference prop passed for scrolling behavior */}
      <Directory catSectionRef={catSectionRef} />
      <BestSellersPreview />  
    </Fragment>
  );
};

export default Home;
