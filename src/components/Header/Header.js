import React from "react";
import './Header.css';
import logo from '../../images/logo.png';
import Burger from '../Burger/Burger.js';
import HomePage from "../HomePage/HomePage";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Логотип" />
                <Burger />
            </div>
            <HomePage />
        </header>
    )
}

export default Header