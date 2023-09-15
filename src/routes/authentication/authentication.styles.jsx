import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin: 2em auto;
  gap: 10em;
`;

export const SignInFormContainer = styled.div`
  border: 1px solid rgb(179, 179, 179);
  padding: 1.5em;
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
  padding: 1.5em;
  border-radius: 5px;
  background: linear-gradient(to bottom, #e4e2e2, #efefef);
  transition: 0.3s ease all;

  &:focus-within {
    transform: translateY(-2%);
    box-shadow: 0 20px 20px -20px gray;
    border: 1px solid rgb(113, 113, 113);
  }
`;
