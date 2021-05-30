import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className = "header">
            {/*logo */}
            <Link>
            <img className = "header__logo" src = "https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"></img>
            </Link>
            {/*search box */}
                <div className = "header__search">
                <input type = "text" className = "header__searchInput" />
                 <SearchIcon className = "header__searchIcon" />
                </div> 

            {/*3 links */}
            <div className = "headerNav">
               
                {/* 1st link */}
                <Link to = "/login" className = "header__link">
                <div className = "header__option">
                
                <span className = "header__optionLineOne">Hello User</span>
                <span className = "header__optionLineTwo">Sign In</span>
                
                </div>
                </Link>
                
                
                {/* 2nd link */}
                <Link to = "/" className = "header__link">
                <div className = "header__option">
                
                <span  className = "header__optionLineOne">Returns</span>
                <span  className = "header__optionLineTwo">& Orders</span>
                
                </div>
                </Link>
                
                
                {/* 3rd link */}
                <Link to = "/" className = "header__link">
                <div className = "header__option">
               
                <span  className = "header__optionLineOne">Your</span>
                <span  className = "header__optionLineTwo">Prime</span>
               
                </div>
                </Link>
                
                
                {/* 4th link */}
                  <Link to = "/checkout" className = "header__link">
                      <div className = "header__basket">
                          {/* icon*/}
                          <ShoppingBasketIcon/>
                          {/* number of items */}
                          <span className = "header__optionLineTwo header__basketCount">0</span>
                      </div>
                  </Link>
             
            </div>
            {/*basket icon */}

        </nav>
    )
}

export default Header
