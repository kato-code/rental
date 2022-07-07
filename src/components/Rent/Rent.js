import React from "react";
import './Rent.css';
import '../App/App.css';

function Rent() {
    return (
        <section className="rent">
            <h2 className="rent__title">АРЕНДА</h2>
            <ul className="rent__list list" id="link">
                <li className="rent__item">
                    <a className="rent__item-link" href="#link">
                        <div className="rent__item-container">
                            <h3 className="rent__item-title">Камеры</h3>
                            <div className="rent__item-arrow"></div>
                        </div>
                    </a>
                </li>
                <li className="rent__item">
                    <a className="rent__item-link" href="#link">
                        <div className="rent__item-container">
                            <h3 className="rent__item-title">Оптика</h3>
                            <div className="rent__item-arrow"></div>
                        </div>
                    </a>
                </li>
                <li className="rent__item">
                    <a className="rent__item-link" href="#link">
                        <div className="rent__item-container">
                            <h3 className="rent__item-title">Световое оборудование</h3>
                            <div className="rent__item-arrow"></div>
                        </div>
                    </a>
                </li>
                <li className="rent__item">
                    <a className="rent__item-link" href="#link">
                        <div className="rent__item-container">
                            <h3 className="rent__item-title">Стабилизация</h3>
                            <div className="rent__item-arrow"></div>
                        </div>
                    </a>
                </li>
                <li className="rent__item">
                    <a className="rent__item-link" href="#link">
                        <div className="rent__item-container">
                            <h3 className="rent__item-title">Видеосендеры и мониторы</h3>
                            <div className="rent__item-arrow"></div>
                        </div>
                    </a>
                </li>
                <li className="rent__item">
                    <a className="rent__item-link" href="#link">
                        <div className="rent__item-container">
                            <h3 className="rent__item-title">Дополнительное оборудование</h3>
                            <div className="rent__item-arrow"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Rent