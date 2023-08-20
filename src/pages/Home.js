import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Feature from '../components/Feature/Feature';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};

export default Home;