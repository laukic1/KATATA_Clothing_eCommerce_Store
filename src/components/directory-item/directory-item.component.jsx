//import styled components for styling
import {
  BackgroundImage,
  DirectoryBodyContainer,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

//import hooks needed to navigate to coresponding category products 
import { useNavigate } from 'react-router-dom';

//Component with category props from Directory component's categories array of category objects. Displays each categories with image, title and route.
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  //Event handler that redirects user to coresponding route
  const onNavigateHandler = () => navigate(route);

  return (

    //each directory item has onClick event that redirects it to appropriate route
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
