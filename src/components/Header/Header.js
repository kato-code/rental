import React from "react";
import './Header.css';
import Burger from '../Burger/Burger.js';

function Header() {
    return (
        <header className="header">
            <Burger />
            <img className="header__logo logo" src="" alt="Логотип" />
        </header>
    )
}

export default Header