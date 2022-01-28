import React from 'react';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import Navbar from '../../components/Navbar';
import { homeInfoOne, homeInfoTwo, homeInfoThree } from '../../components/InfoSection/data';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

const Home = () => {
  return (
  <div>
      <Navbar />
      <HeroSection />
      <InfoSection {...homeInfoOne}/>
      <InfoSection {...homeInfoTwo}/>
      <InfoSection {...homeInfoThree}/>
      <Services />
      <Footer />
  </div>);
};

export default Home;


