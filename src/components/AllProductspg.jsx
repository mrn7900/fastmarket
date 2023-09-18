import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
function AllProductspg(){
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

      return <div>
                {isHeaderVisible && <Navbar />}
                 <Header />
                 <Footer/>
            </div>
}
export default AllProductspg;