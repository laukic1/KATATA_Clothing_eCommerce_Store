import { useContext } from "react";
import './best-sellers-preview.styles.scss';
import BestSellerPreview from "../../components/best-seller-preview/best-seller-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const BestSellersPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='best-sellers-preview-container'>
      {Object.keys(categoriesMap).slice(0,1).map((title) => {
        const products = categoriesMap[title];
        return (
          <BestSellerPreview key={title} products={products} title={title} />
        );
      })}
    </div>
  );
};

export default BestSellersPreview;
