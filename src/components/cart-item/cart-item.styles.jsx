import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(197, 197, 197);
  text-transform: none;

  &:hover {
    cursor: pointer;
    box-shadow: none;
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
  font-size: 10px;
`;

export const ItemName = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
