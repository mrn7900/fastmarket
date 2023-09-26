import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ScrollToTopButton from '../components/ScrollToTopButton';
function AllProductspg(){
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 250) {
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

      return <div>
                {isHeaderVisible && <Navbar />}
                 <Header />
                 <ProductList/>
                 <ScrollToTopButton/>
                 <Footer/>
            </div>
}
export default AllProductspg;