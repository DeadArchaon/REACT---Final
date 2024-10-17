import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarP from '../components/NavBar/NavBarPages/NavBarPages';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import Footer from '../components/Footer/Footer';

const AllProducts: React.FC = () => {
  return (
    <div>
      <NavbarP/>
      <ProductsGrid />
      <Footer/>
    </div>
  );
};

export default AllProducts;