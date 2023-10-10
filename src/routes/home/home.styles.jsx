import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const HeroSign = styled.div`
 width: 100%;
    opacity: 1;
    position: absolute;
    display: flex;
    
    justify-content: center;


`
    


export const HeroImage = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover; // or 'contain' based on your preference
  box-shadow: inset 0 0 200px black;
  opacity: 0.5;
  
  

`;
export const HeroOverlay = styled.div`
  width: 100vw;
  height: 100vh;
    background-color: black;
  background-size: 100%;
  z-index: -1;
  
 
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;

 
  

  &:hover ${HeroImage}  {
        box-shadow: none;
        filter: none;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 4em;
    width: 40%;
    opacity: 1;
    position: absolute;
    opacity: 1;
    border-radius: 3px;
    color: white;

    @media (max-width: 768px) {

  font-size: 20px;
  padding-bottom: 1em;

  }
  }
`;



export const TitleAnimation = keyframes`
0% {
        transform: translateY(100%);
        opacity: 0;
    }
    60% {
        transform: translateY(100%);
        opacity: 0;
    }
    80% {
        transform: translateY(60%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const HeroTitle = styled.h1`
text-align: center;
  position: absolute;
  z-index: 2;
  font-size: 4em;
  color: white;
  text-shadow: 0 0 3px black;
  top: 20%;
  animation: ${TitleAnimation} 2s ease-in-out;

  @media (max-width: 768px) {
        font-size: 3em;
        top: 30%;
    }
`;

export const ArrowAnimation = keyframes`
0%{
        transform: scale(1.0);
        
    }
    
    50%{
        transform: scale(1.3);
        transform: translateY(50%)
        
    }
    100%{
        transform: scale(1.0);
        opacity: 1;
    }
`;

export const StyledFontAwesomeDownArrow = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10%;
  z-index: 3;
  font-size: 3em;
  animation: ${ArrowAnimation} 2.5s infinite ease-in-out;
  opacity: 0;

  &:hover {
    transform: scale(1.3);
    cursor: pointer;
    animation: none;
    opacity: 1;
    
  }
`;

