import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-cart.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1em;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 32px;
  color: rgb(2, 187, 2);
`;
