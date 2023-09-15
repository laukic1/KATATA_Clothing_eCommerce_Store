import { CategoriesSection, Banner, CustomerBanners, CategoriesBanners, BannerText} from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";
import { ReactComponent as CustomerIcon1 } from "../../assets/customer-service1.svg";
import { ReactComponent as CustomerIcon2 } from "../../assets/customer-service2.svg";
import { ReactComponent as CustomerIcon3 } from "../../assets/customer-service3.svg";

const Directory = ({ categories }) => {
  return (
    <CategoriesSection>
      <CustomerBanners>
        <Banner>
          <CustomerIcon1 />
          <BannerText>Exceptional support</BannerText>
          
        </Banner>
        <Banner>
          <CustomerIcon2 />
          <BannerText>High-quality fashion products</BannerText>
        </Banner>
        <Banner>
          <CustomerIcon3 />
          <BannerText>Trending style approved</BannerText>
        </Banner>
      </CustomerBanners>
      <CategoriesBanners id='cat'>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </CategoriesBanners>
    </CategoriesSection>
  );
};
export default Directory;
