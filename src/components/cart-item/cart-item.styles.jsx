import styled from "styled-components";

export const SeeOrDeleteButton = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
  width: 100%;
 height: 100%;
  color: black;
  
  opacity: 0;


  .see {
    
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
background-color: rgba(0, 0, 255, 0.1);
   
&:hover {
  background-color: rgba(0, 0, 255, 0.3);
}

span:hover {
      transform: scale(1.3); 
        opacity: 0.5;
    }
  }

  .delete {
    background-color: rgba(0, 255, 0, 0.1);
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0;

    .plus {
      color: rgba(0, 255, 0, 1);
    }
    .minus {
      color: rgba(255, 0, 0, 1);
    }


    &:hover {
      background-color: rgba(0, 255, 0, 0.3); 
    }

    span:hover {
      transform: scale(1.3); 
        opacity: 0.5;
    }
     
  }
`

export const CartItemContainer = styled.div`
  width: 100%;
  position:relative;
  display: flex;
  height: 100px;
  margin-bottom: 15px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(197, 197, 197);
  text-transform: none;


  &:hover {
    cursor: pointer;
    box-shadow: none;

    ${SeeOrDeleteButton} {
      
      opacity:1;
    }
  }
`;



export const CartItemImage = styled.img`
  width: 40%;
  border-radius: 5px 0 0 5px;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  color: black;
  font-size: 12px;


  
`;

export const ItemName = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
