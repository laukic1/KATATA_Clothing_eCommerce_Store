import { ButtonText, ProductCardContainer, ProductImage, FooterName, ImageFooter, FooterPrice } from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as AddToCartIcon } from '../../assets/shopping-cart.svg'

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext)

  const addItemToCartHandler = () => addItemToCart(product);
    
  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ImageFooter>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}€</FooterPrice>
      </ImageFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemToCartHandler}><ButtonText>Add To Cart</ButtonText><AddToCartIcon stroke="rgba(0,0,0,0.5)" width='15px' height='15px'/></Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
