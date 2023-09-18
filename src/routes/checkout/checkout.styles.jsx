import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width:60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding: 25px;
  padding-bottom: 3em;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 0 15px darkgrey;
  background: rgba(100, 100, 100, 0.1);
  
  @media (max-width: 768px) {
    width: 90%;
    
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  background: rgba(150, 150 ,150, 0.2);
  border-radius: 5px 5px 0 0;

  @media (max-width: 768px) {
    font-size: 10px;
    justify-content: space-between;
    
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    justify-content: space-between;
    
    
  }

  
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-weight: bold;

  &:last-child {
    width: 8%;
  }

  @media (max-width: 768px) {
    width: auto;

    &:last-child {
    width: auto;
  }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: auto;

    &:last-child {
    width: auto;
  }
  }

`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 26px;
  
`;

export const PaymentContainer = styled.div`
margin-top: 5em;
`

