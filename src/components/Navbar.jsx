import './css/Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function Navbar(){
    const [divOpacity, setDivOpacity] = useState(0.6);
    const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = () => {
    setDivOpacity(1);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

    return <div>
                <header className="headerCollapsed">
      <div className='search'>

      <button className="btn category"  onClick={handleOpenMenu} >
            <ClearAllOutlinedIcon/>
            <p>دسته بندی ها</p>
        </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>لبنیات</MenuItem>
            <MenuItem onClick={handleCloseMenu}>تنقلات</MenuItem>
            <MenuItem onClick={handleCloseMenu}>نوشیدنی ها</MenuItem>
            <MenuItem onClick={handleCloseMenu}>میوه ها</MenuItem>
            <MenuItem onClick={handleCloseMenu}>محصولات پروتئینی</MenuItem>
          </Menu>
        <form action="">
            <input  onClick={handleClick} style={{ opacity: divOpacity }}className="sinput" type="text" placeholder='جست و جوی کالا' />
            <button  className="inputbtn hover" type="submit"><SearchOutlinedIcon/></button>  
        </form>
        </div>
        <div className='headerContent'>
            <h1 >فست مارکت</h1>
        </div>
        <div className='btnContainer'>
            <button className="basketbtnCollapsed btn" >
                <ShoppingCartOutlinedIcon/>
            </button>
            <button className="basketbtnCollapsed btn" >
                <LoginOutlinedIcon/>
            </button>
        </div>
        </header>
    </div>
          
}
export default Navbar;