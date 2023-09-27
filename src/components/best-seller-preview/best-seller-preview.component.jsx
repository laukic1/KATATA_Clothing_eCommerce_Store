//import styled components for styling
import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from "./best-seller-preview.styles.jsx";

//import the ProductCard component
import ProductCard from "../product-card/product-card.component.jsx";

//Component representing a preview section for best-selling products.
const BestSellerPreview = ({ title, products }) => {
  return (
    //Container for the entire preview section
    <CategoryPreviewContainer>
    {/* Title linking to the "best sellers" section in the shop */}
        <CategoryPreviewTitle to="shop/best sellers">
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      <Preview>
      {/* Mapping through the first four products and rendering ProductCard for each */}
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default BestSellerPreview;
