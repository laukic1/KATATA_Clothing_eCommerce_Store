// Import routing components
import { Routes, Route } from "react-router-dom";

// Importing relevant components to display products preview and products through this route
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

// Component displays all category previews and routes to each category products
const Shop = () => {
  return (
    <Routes>
    {/* This route renders categories preview(first four products fo each category) */}
      <Route index element={<CategoriesPreview />} />
      {/* This route routes ech category preview title to all products for each category */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
