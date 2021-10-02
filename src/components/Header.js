import React from 'react';
import './css/Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>learnIt</h1>
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon className="search" />
      </div>
      <div className="header__buttons">
        <ShoppingCartOutlinedIcon className='shopping_cart' />
        <button className="login">Log In</button>
        <button className="sign_up">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
