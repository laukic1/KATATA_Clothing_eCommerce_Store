import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Directory from "../../components/directory/directory.component";
import { useEffect, Fragment, useRef } from "react";
import { Outlet } from "react-router-dom";
import {
  HeroContainer,
  HeroImage,
  HeroBodyImg,
  HeroBodyImg2,
  HeroTitle,
  StyledFontAwesomeDownArrow,
} from "./home.styles";

import BestSellersPreview from "../best-sellers-preview/best-sellers-preview.component";

const Home = () => {

  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };
    scrollToTop();
  }, []);

  const catSectionRef = useRef(null)

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
        <StyledFontAwesomeDownArrow
          icon={faAngleDown}
          size="2xl"
          style={{ color: "#000000" }}
          onClick={scrollToSection}
        />
      </HeroContainer>

      <Directory catSectionRef={catSectionRef} />
      <BestSellersPreview />  
    </Fragment>
  );
};

export default Home;
