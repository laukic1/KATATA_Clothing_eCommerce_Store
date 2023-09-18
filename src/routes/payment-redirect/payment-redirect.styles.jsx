import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width:60%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  padding: 25px;
  padding-bottom: 3em;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 0 15px darkgrey;
  background: rgba(100, 100, 100, 0.1);
  
  @media (max-width: 1024px) {
    width: 80%; 
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const RedirectTite = styled.span`
  font-weight: bold;
  font-size: 20px;
`

