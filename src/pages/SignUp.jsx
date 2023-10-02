import React, { useState, useEffect } from 'react';
import HomeContent from '../components/HomeContent';
import Products from '../components/Products';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SignUpForm from '../components/SignUpForm';


function SignUp() {
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

  return (
    <div>
      {isHeaderVisible && <Navbar />}
      <Header />
        <SignUpForm/>
      <Footer />
    </div>
  );
}

export default SignUp;
