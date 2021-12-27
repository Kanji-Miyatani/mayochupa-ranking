import React from 'react';
import "../Style/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="ロゴ" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__serchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">ゲストさんへ</span>
                    <span className="header__optionLineTwo">サインイン</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">&orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">&orders</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className="" />
                    <div className="header_optionLineTwo
                     header__basketCount">0</div>
                </div>
            </div>
        </div>
    )
}

export default Header
