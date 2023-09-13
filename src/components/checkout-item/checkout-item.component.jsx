import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const { incrementItem, decrementItem, removeItem } = useContext(CartContext);

  const incrementHandler = () => incrementItem(checkoutItem);
  const decrementHandler = () => decrementItem(checkoutItem);
  const removeHandler = () => removeItem(checkoutItem);

  const itemPriceSum = price * quantity;

  return (
    quantity >= 1 && (
      <div className="checkout-item-container">
        <div className="image-container">
          <img className="checkout-img" src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div onClick={decrementHandler} className="arrow">
            &#8249;
          </div>
         <span className='value'>{quantity}</span> 
          <div onClick={incrementHandler} className="arrow">
            &#8250;
          </div>
        </span>
        <span className="price">{itemPriceSum}€</span>
        <div className='remove-button' onClick={removeHandler}>&#10005;</div>
      </div>
    )
  );
};
export default CheckoutItem;
