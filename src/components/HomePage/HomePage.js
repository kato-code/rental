import React from "react";
import './HomePage.css';


function HomePage() {
    return (
        <div className="home-page__container">
            <h2 className="home-page__title">Аренда оборудования</h2>
            <p className="home-page__subtitle">Свет, камеры и аксессуары</p>
            <a className="home-page__link" href="#link">Посмотреть ассортимент &rarr;</a>
        </div>
    )
}

export default HomePage