import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
//import styled components for styling
import {
  CartItemContainer,
  CartItemImage,
  ItemName,
  ItemDetails,
  SeeOrDeleteButton,
} from "./cart-item.styles.jsx";


import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
//Component that renders item in the cart dropdown including image, name, quantity and price
const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { incrementItem, decrementItem, removeItem } = useContext(CartContext);

    const incrementItemHandler = () => incrementItem(item);
    const decrementItemHandler = () => decrementItem(item);
    const removeItemHandler = () => removeItem(item);

  const priceSum = price * quantity;

  return (
    //Conditionally rendering component based on the quantity of the cart items in cart dropdown
    quantity >= 1 && (
      <CartItemContainer>
        <SeeOrDeleteButton>
          <div className="see">
            <span>
              {" "}
              <FontAwesomeIcon  icon={faEye} size="xl" />
            </span>
          </div>

          <div className="delete">
            <span onClick={decrementItemHandler} className='minus'>
              {" "}
              <FontAwesomeIcon icon={faSquareMinus} size="xl" />
            </span>
            <span onClick={removeItemHandler}>
              {" "}
              <FontAwesomeIcon icon={faTrashCan} size="lg" />
            </span>
            <span onClick={incrementItemHandler} className='plus'>
              {" "}
              <FontAwesomeIcon  icon={faSquarePlus} size="xl" />
            </span>
            <div><span><b>{quantity}</b></span></div>
          </div>
        </SeeOrDeleteButton>
        <CartItemImage src={imageUrl} alt={`${name}`} />
        <ItemDetails>
          <ItemName>{name}</ItemName>
          <span className='price-sum'>{priceSum}€</span> 
          <br />
          <span className="price">
            Quantity: <b>{quantity}</b> 
          </span>
         
        </ItemDetails>
      </CartItemContainer>
    )
  );
};

export default CartItem;
