//import styled components for styling
import {
  CategoriesSection,
  Banner,
  CustomerBanners,
  CategoriesBanners,
  BannerText,
} from "./directory.styles.jsx";

//import other components
import DirectoryItem from "../directory-item/directory-item.component";

//import SVG icons
import { ReactComponent as CustomerIcon1 } from "../../assets/customer-service1.svg";
import { ReactComponent as CustomerIcon2 } from "../../assets/customer-service2.svg";
import { ReactComponent as CustomerIcon3 } from "../../assets/customer-service3.svg";

//Array of objects used for displaying different categories
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/ngBFFNc/category-img-hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/frmRwL6/category-img-jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/fG61Cx6/category-img-sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/YfYsX1c/category-img-womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/stD9GTB/category-img-mens.png",
    route: "shop/mens",
  },
];

// Component that renders categories menu that redirects users to wanted category
const Directory = ({ catSectionRef }) => {
  return (
    //ref property is used for referencing this section for another function in the projects, it allows scrolling to this section using an arrow in the hero section of the homepage
    <CategoriesSection ref={catSectionRef}>
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

      {/* Mapping through the categories array to display all the categories with all the aditional properties */}
      <CategoriesBanners>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </CategoriesBanners>
    </CategoriesSection>
  );
};
export default Directory;
