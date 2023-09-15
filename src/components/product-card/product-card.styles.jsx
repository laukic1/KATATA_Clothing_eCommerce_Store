import styled from "styled-components";

export const ProductCardContainer = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    position: relative;
    border: 1px solid rgb(201, 199, 199);
    border-radius: 5px;
    background-color: rgba(231, 231, 231, 0.4);
    padding-bottom: 1em;
    box-shadow: 0 0 5px rgb(179, 178, 178);
    transition: 0.3s ease ease-in-out;
    
    
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 175px;
      display: none;
      border-radius: 3px;
    }


    &:hover {
      transform: scaleX(1.01);
      cursor: pointer;

      ProductImage {
        opacity: 0.8;
        transition: 0.3s ease ease-in-out;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }

    
`

export const ProductImage = styled.img`
 width: 100%;
      height: 90%;
      object-fit: cover;
      margin-bottom: 5px;
      border-radius: 5px 5px 0 0;
      box-shadow: 0 0 5px rgb(179, 178, 178);
      transition: 0.3s ease ease-in-out;   
`

export const ImageFooter = styled.div`
width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 5px;
`

export const FooterName = styled.span`
 width: 90%;
        margin-bottom: 15px;
        color: rgb(70, 70, 70);
`
export const FooterPrice = styled.span`
width: 10%;
        color: rgb(70, 70, 70);
`

  