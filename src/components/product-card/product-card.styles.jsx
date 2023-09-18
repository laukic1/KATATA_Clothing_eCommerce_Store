import styled from "styled-components";



export const ProductImage = styled.img`
 width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 5px;
      border-radius: 5px 5px 0 0;
      box-shadow: 0 0 5px rgb(179, 178, 178);
      transition: 0.3s ease ease-in-out;   
`

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
    transition: 0.3s ease all;
    
    
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 175px;
      display: none;
      border-radius: 3px;

      @media (max-width: 1024px) {
        width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 175px;
      display: block;
      border-radius: 3px;

      }
    }

@media (min-width: 1024px) {
  &:hover {
      transform: scaleX(1.01);
      cursor: pointer;

      ${ProductImage} {
        opacity: 0.8;
        
        filter: grayscale(40%);
      filter: blur(0.5px);
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }


    }
}
    

    
`

export const ImageFooter = styled.div`
width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 5px;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 1024px) {
        font-size: 14px;
      }
`

export const FooterName = styled.span`
        margin-bottom: 15px;
        color: rgb(70, 70, 70);
        
       
`
export const FooterPrice = styled.span`
        color: rgb(70, 70, 70);
        
        
`

export const ButtonText = styled.span`
margin-right: 0.5em;

@media (max-width: 1024px) {
  display: none;
  
  
}
`