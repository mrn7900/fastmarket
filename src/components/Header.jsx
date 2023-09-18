import './css/Header.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import React, { useState, useEffect } from 'react';

function Header() {
  const [divOpacity, setDivOpacity] = useState(0.6);



// Collapsing navbar while scrolling
//   const [isScrolled, setIsScrolled] = useState(false);
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const headerContainer = `headerContainer ${isScrolled ? 'headerCollapsed' : ''}`;
//   const headerContent = ` ${isScrolled ? 'headerContentCollapsed' : ''}`;
//   const basketbtnCollapsed = `basketbtn btn ${isScrolled ? 'basketbtnCollapsed btn' : ''}`;


  const handleClick = () => {
    setDivOpacity(1);
  };

  return (
    <div>
      <header className="headerContainer">
      <div className='search'>

         <button className="btn category" >
            <ClearAllOutlinedIcon/>
            <p>دسته بندی ها</p>
        </button>
        <form action="">
            <input  onClick={handleClick} style={{ opacity: divOpacity }}className="sinput" type="text" placeholder='جست و جوی کالا' />
            <button  className="inputbtn hover" type="submit"><SearchOutlinedIcon/></button>  
        </form>
        </div>
        <div className='headerContent'>
            <h1 >فست مارکت</h1>
            <h2>خرید سوپرمارکتی بدون واسطه از درب کارخانه با فست مارکت</h2>
        </div>
        <div className='btnContainer'>
            <button className="basketbtn btn" >
                <ShoppingCartOutlinedIcon/>
            </button>
            <button className="basketbtn btn" >
                <LoginOutlinedIcon/>
            </button>
        </div>
        </header>
    </div>
  );
}

export default Header;