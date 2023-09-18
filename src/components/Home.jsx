import React, { useState, useEffect } from 'react';
import HomeContent from './HomeContent';
import Products from './Products';
import Header from './Header';
import Categories from './Categories';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isHeaderVisible && <Navbar />}
      <Header />
      <HomeContent />
      <Products />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
