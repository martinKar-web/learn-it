import React from 'react';
import './css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>learnIt</h1>
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="search" />
      </div>
      <div className="header__buttons">
        <button className="login">Log In</button>
        <button className="sign_up">Sign Up</button>
        {/*<ShoppingCartIcon/>*/}
      </div>
    </div>
  );
};

export default Header;
