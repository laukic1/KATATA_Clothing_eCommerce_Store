//Importing styles for the component
import './categories-preview.scss';

//import hooks and context for data retrieval
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

//importing the appropriate components
import CategoryPreview from "../../components/category-preview/category-preview.component";

// Component is used to show each category preview 
const CategoriesPreview = () => {

  // Using the context hook to acces data from the CategoriesContext
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='categories-preview-container'>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
