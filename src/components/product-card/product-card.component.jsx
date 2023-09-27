//import styled components for styles
import {
  ButtonText,
  ProductCardContainer,
  ProductImage,
  FooterName,
  ImageFooter,
  FooterPrice,
} from "./product-card.styles.jsx";

//import button types component
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

//import svg for cart icon that will be displayed on each product card
import { ReactComponent as AddToCartIcon } from "../../assets/shopping-cart.svg";

//import hooks and context
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

//Component that is used through entire website. 
//It displays products with name, image, price, and add to cart button that is used as event handler that adds product to users cart.
const ProductCard = ({ product }) => {

  //prop is destructured for needed properties.
  const { imageUrl, name, price } = product;

  //event handler that adds products to cart
  const { addItemToCart } = useContext(CartContext);
  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ImageFooter>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}€</FooterPrice>
      </ImageFooter>

      {/* Rendered add to cart button with onClick event that adds the product to cart */}
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >

        <ButtonText>Add To Cart</ButtonText>
        <AddToCartIcon stroke="rgba(0,0,0,0.5)" width="15px" height="15px" />
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
