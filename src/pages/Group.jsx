import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CategoriesDetailList from '../components/CategoriesDetailList'
import ScrollToTopButton from '../components/ScrollToTopButton';

function Group(){
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
                 <CategoriesDetailList/>
                 <ScrollToTopButton/>
                 <Footer/>
            </div>
}
export default Group;
//color pallet
//https://colorhunt.co/palette/ebf0f698ccd3364e68132238