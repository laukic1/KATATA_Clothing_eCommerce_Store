import { useState } from "react";

import { StyledBurger } from "./hamburger-icon.styles";

import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";
const HamburgerIcon = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const hamburgerStateHandler = () => setIsOpen(!isOpen);
  

  return (
    <>
    <StyledBurger isOpen={isOpen} onClick={hamburgerStateHandler}>
      <div />
      <div />
      <div />
      
    </StyledBurger>
    <HamburgerMenu isOpen={isOpen} />
    </>
  );
};

export default HamburgerIcon;
