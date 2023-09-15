import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
        <CategoryPreviewTitle to={title}>
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

export default CategoryPreview;
