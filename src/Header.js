import React from 'react';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
        <Link to="/">
        <img className="header_logo" src='/banner0.png' alt="Amazon Logo" />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" placeholder="Search Amazon" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
        <Link to={!user && '/login'} className="header__clearlink">
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
          <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__basketCount">{basket?.length}</span>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Header;