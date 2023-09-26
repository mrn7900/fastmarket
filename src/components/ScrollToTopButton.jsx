import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './css/ScrollToTopButton.css'
// import { makeStyles } from '@mui/styles';




function ScrollToTopButton() {
 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the user's scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
    
      {isVisible && (
        <button
          className="scrollToTop"
          color="primary"
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
