//import styles
import './best-sellers-preview.styles.scss';

//import hooks and context
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

//import preview component
import BestSellerPreview from "../../components/best-seller-preview/best-seller-preview.component";

//Component for best sellers preview that renders first category in database
const BestSellersPreview = () => {

  // getting object value for categoriesMap from context
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className='best-sellers-preview-container'>

    {/* Slicing and maping through categoriesMap to retrieve wanted title and products of categories in database */}
      {Object.keys(categoriesMap).slice(0,1).map((title) => {
        const products = categoriesMap[title];
        return (
          // Rendering products with imported BestSellerPreview component
          <BestSellerPreview key={title} products={products} title={title} />
        );
      })}
    </div>
  );
};

export default BestSellersPreview;
