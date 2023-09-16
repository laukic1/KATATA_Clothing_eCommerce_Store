import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from "./best-seller-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component.jsx";

const BestSellerPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
        <CategoryPreviewTitle to="shop/best sellers">
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default BestSellerPreview;
