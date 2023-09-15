
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Directory from "../../components/directory/directory.component";
import { useEffect, Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  HeroContainer,
  HeroImage,
  HeroBodyImg,
  HeroBodyImg2,
  HeroTitle,
  StyledFontAwesomeDownArrow,
} from "./home.styles";

const Home = () => {

  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };
    scrollToTop();
  }, []);

  const scrollToSection = () => {
    const scrollToSection = document.getElementById("cat");
    scrollToSection.scrollIntoView({ behavior: "smooth" });
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

      <Directory />
    </Fragment>
  );
};

export default Home;
