//import styled component for styling
import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from "./category-preview.styles.jsx";

//import needed component ProductCard
import ProductCard from "../product-card/product-card.component";

// Component that previews first 4 products of each category
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      <Preview>
      {/* Mapping through each on of the categories products and renders first four products of each */}
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
