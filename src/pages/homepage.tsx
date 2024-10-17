import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/NavBar/NavBarHome/NavBar';
import Hero from '../components/HeroSection/HeroSection';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import Banner from '../components/Banner/Banner';
import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import Reviews from '../components/Reviews/Reviews';
import Slider from '../components/Slider/Slider';
import VideoSection from '../components/VideoSection/VideoSection';
import Footer from '../components/Footer/Footer';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageGrid />
      <Banner />
      <ProductShowcase />
      <Reviews />
      <Slider />
      <VideoSection/>
      <Footer />
    </div>
  );
};

export default Homepage;