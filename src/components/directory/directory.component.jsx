import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";
import { ReactComponent as CustomerIcon1 } from "../../assets/customer-service1.svg";
import { ReactComponent as CustomerIcon2 } from "../../assets/customer-service2.svg";
import { ReactComponent as CustomerIcon3 } from "../../assets/customer-service3.svg";

const Directory = ({ categories }) => {
  return (
    <div className="categories-section">
      <div className="customer-banners">
        <div className="customer-banner1">
          <CustomerIcon1 />
          <p>Exceptional support</p>
          
        </div>
        <div className="customer-banner2">
          <CustomerIcon2 />
          <p>High-quality fashion products</p>
        </div>
        <div className="customer-banner3">
          <CustomerIcon3 />
          <p>Trending style approved</p>
        </div>
      </div>
      <div id="cat" className="categories-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
export default Directory;
