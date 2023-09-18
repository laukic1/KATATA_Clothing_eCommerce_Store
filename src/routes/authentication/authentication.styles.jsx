import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  margin: 2em;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SignInFormContainer = styled.div`
  border: 1px solid rgb(179, 179, 179);
  
  border-radius: 5px;
  background: linear-gradient(to bottom, #e4e2e2, #efefef);
  transition: 0.3s ease all;

  &:focus-within {
    transform: translateY(-2%);
    box-shadow: 0 20px 20px -20px gray;
    border: 1px solid rgb(113, 113, 113);
  }
`;

export const SignUpFormContainer = styled.div`
  border: 1px solid rgb(179, 179, 179);
  
  border-radius: 5px;
  background: linear-gradient(to bottom, #e4e2e2, #efefef);
  transition: 0.3s ease all;

  &:focus-within {
    transform: translateY(-2%);
    box-shadow: 0 20px 20px -20px gray;
    border: 1px solid rgb(113, 113, 113);
  }
`;
