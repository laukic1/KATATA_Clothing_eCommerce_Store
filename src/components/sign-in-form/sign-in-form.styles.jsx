import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 1em;
  
  @media (max-width: 768px) {
    width: 350px;

  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5em;
`;
