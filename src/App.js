import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Directory from "./components/category-menu/directory.component";
import { useEffect } from "react";

const App = () => {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/ngBFFNc/category-img-hats.png" ,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/frmRwL6/category-img-jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/fG61Cx6/category-img-sneakers.png" ,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/YfYsX1c/category-img-womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/stD9GTB/category-img-mens.png" ,
    },
  ];

  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
      }
    
    scrollToTop();

  }, [])

  const scrollToSection = () => {
    const scrollToSection = document.getElementById('cat');
    scrollToSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (

   <div> 
    <div className='hero-container'>

      <div className='hero-image'  />
     <img className='hero-body-img' src="https://i.ibb.co/StxB6dq/hero-img-min-3.png" alt='hero-body' />
     <img className='hero-body-img2' src="https://i.ibb.co/bR3fg55/hero-img-min2.png"  alt='hero-body' />
     <h1 className='title-hero'>KATATA CLOTHING</h1>
     <FontAwesomeIcon className='arrow-icon' icon={faAngleDown} size="2xl" style={{color: "#000000",}} onClick={scrollToSection} />
    </div>
    <div className='carousel'></div>
  <Directory categories={categories} />
  </div>
  ) 
};

export default App;
