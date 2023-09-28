//Importing styled components for styling
import { CategoryPageContainer, CategoryTitle } from "./category.styles.jsx";

//Importing useParams hook for routing to each category page
import { useParams } from "react-router-dom";

//Importing hooks 
import { Fragment, useContext, useState, useEffect } from "react";

//Importing context for accessing category data
import { CategoriesContext } from "../../contexts/categories.context";

//Importing components
import ProductCard from "../../components/product-card/product-card.component";

// Component that renders products for each of the categories
const Category = () => {

  // Extracting the category parameter form the URL
  const { category } = useParams();

// Accessing the categoriesMap from the context
  const { categoriesMap } = useContext(CategoriesContext);
 
 // State management for storing products of the current category
  const [products, setProducts] = useState(categoriesMap[category]);

// useEffect to update products when category or categoriesMap changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryPageContainer>
      {/* Conditionaly rendering of the product, depending if products exist or not */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPageContainer>
    </Fragment>
  );
};

export default Category;
