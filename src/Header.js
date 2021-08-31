import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";




function Header() {
    return (
        <div className-="header">

        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo"
          />

          <div classNAme="header_search">
              <input className="header_searchInput" type="text" /> 
              <SearchIcon className="header_searchIcon" />
          </div>

          <div className="header_nav">

             <div className ="header_option">
              <span className="header_option_lineOne">Hello Guest!
              </span>

              <span className="header_option_lineTwo">
                Sign In
                </span>
                            
                            


               </div>
            </div>
            
        </div>
    )
}

export default Header
