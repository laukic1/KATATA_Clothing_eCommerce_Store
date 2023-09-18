import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5vh;
`;

export const BackgroundAnimation = keyframes`
 0% {
        transform: scale(1);
        background-position: 250% 0;
    }
    50% {
        
        background-position: 200% 0;
    }
    100% {
        transform: scale(1);
        background-position: 250% 0;
    }
`;

export const HeroImage = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(to bottom, #e4e2e2, #ffffff);
  animation: ${BackgroundAnimation} 10s infinite ease-in-out;
  background-size: 500%;
  z-index: -1;
`;

export const Image1Animation = keyframes`
0% {
        transform: translate(-34%,250%);
        
    }
    30% {
        transform: translate(1%,-10%);
        
    }
    90% {
        transform: translate(0);
        
    }
    100% {
        transform: translate(0);
    }
`;

export const Img1Animation = keyframes`
 0% {
        transform: translate(0)
    }
    50% {
        transform: translate(-0.2%,1%)
    }
    100% {
        transform: translate(0);
    }
`;

export const HeroBodyImg = styled.img`
  width: 50vw;
  padding: 0;
  margin: 0;
  height: 50vh;
  position: absolute;
  z-index: 1;
  animation: ${Image1Animation} 1.5s ease-in-out,
    ${Img1Animation} 5s infinite ease-in-out 1.5s;

    @media (max-width: 768px) {
        height: 20vh;
        width: 90vw;
        top: 50%;
    }

    @media (min-width:768px) and (max-width: 1024px) {
        height: 40vh;
        width: 100vw;
        top: 30%;
    }
`;

export const Image2Animation = keyframes`
0% {
        transform: translate(34%,-250%)
    }
    30% {
        transform: translate(-1.8%,10%);
    }
    90% {
        transform: translate(0);
    }
    
    100% {
        transform: translate(0);
    }
`;

export const Img2Animation = keyframes`
 0% {
        transform: translate(0)
    }
    50% {
        transform: translate(-0.2%,1%);
    }
    100% {
        transform: translate(0);
    }
`;

export const HeroBodyImg2 = styled.img`
  width: 50vw;
  padding: 0;
  margin: 0;
  height: 50vh;
  position: absolute;
  z-index: 1;
  animation: ${Image2Animation} 1.5s ease-in-out,
    ${Img2Animation} 4s infinite ease-in-out 1.5s;

    @media (max-width: 768px) {
        height: 20vh;
        width: 90vw;
        top: 50%;
    }

    @media (min-width:768px) and (max-width: 1024px) {
        height: 40vh;
        width: 100vw;
        top: 30%;
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
  color: rgb(0, 0, 0);
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
