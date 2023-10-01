import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import WelcomeDashboard from '../components/WelcomeDashboard';

function Dashboard(){
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
                <WelcomeDashboard/>
                <ScrollToTopButton />
                <Footer />

           </div>

}
export default Dashboard;