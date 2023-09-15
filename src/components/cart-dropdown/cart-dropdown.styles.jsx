import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
  border: 1px solid rgb(182, 182, 182);
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 5px;
  overflow-y: auto;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    position: sticky;
    bottom: 0;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 70% auto;
  text-transform: none;
  color: black;
`;

export const CartItems = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
`;
