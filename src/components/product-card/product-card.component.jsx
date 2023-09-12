import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;

const { addItemToCart } = useContext(CartContext);

const addItemToCartHandler = () => addItemToCart(product)
    
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemToCartHandler}>ADD TO CART</Button>
    </div>
  );
};

export default ProductCard;
