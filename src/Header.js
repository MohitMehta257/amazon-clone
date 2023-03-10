import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
  const[{basket,user}]=useStateValue();


  const login = ()=>{
    if(user)
    {
      auth.signOut();
    }

  };


  return (
  <nav className="header">

    {/* logo on the left->img*/}

    <Link to="/">
      <img className="header__logo" 
      /*scr="http://pngimg.com/uploads/amazon/amazon_PNG11.png"*/
      src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"
      alt=""
      />
    </Link>

    {/* Search box */ }

    <div className="header__search">
    <input type="text" className='header__searchInput'/>
    <SearchIcon className="header__searchIcon"/>
    </div>
    



    {/* 3 Links */ }

    <div className='header__nav'>
      {/* 1st Link */}

      <Link to={!user && "/login"} className='header__link'>

        <div onClick={login} className='header__option'>
          <span className='header__optionLineOne'>Hello{user?.email}</span>
          <span className='header__optionLineTwo'>{user?'Sign Out':'Sign in'}</span> 
        </div>
           
      </Link>

      {/* 2nd Link */}
      <Link to="/" className='header__link'>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span> 
        </div>
           
      </Link>

      {/* 3rd Link */}
      <Link to="/" className='header__link'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span> 
        </div>
      </Link>

      <Link to="/checkout" className='header__link'>

        <div className='header__optionbasket'>
          {/* Shopping basket item*/}
          {/* Number of items in baskte*/}
          <ShoppingCartOutlinedIcon/>
          <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
        </div>
      </Link>
    </div>
    {/* Basket icon with a number */}

  </nav>
    
  );
}

export default Header