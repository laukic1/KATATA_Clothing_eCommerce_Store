import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
 width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
width: 23%;
      padding-right: 15px;
`

export const CheckoutItemImage = styled.img`
width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 0 5px darkgrey;
`

export const CheckoutDetails = styled.span`
width: 23%;
`
export const QuantityCheckoutDetails = styled.span`
display: flex;
      align-items: center;
`

export const ValueCheckoutDetails = styled.span`
margin: 0 10px;
`

export const IncrementDecrementArrow = styled.div`
cursor: pointer;
        font-size: 2em;

        &:hover {
          transform: scale(1.1);
          text-shadow: 0 0 3px black;
        }
`

export const RemoveButton = styled.div`
padding-left: 12px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        text-shadow: 0 0 3px black;
      }
`

  