import React from "react";
import './Catalog.css';
import '../App/App.css';

function Catalog() {
    return (
        <section className="catalog">
            <h2 className="catalog__title">АРЕНДА</h2>
            <ul className="catalog__list list" id="link">
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h3 className="catalog__item-title">Камеры</h3>
                        <div className="catalog__item-arrow"></div>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h3 className="catalog__item-title">Оптика</h3>
                        <div className="catalog__item-arrow"></div>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h3 className="catalog__item-title">Световое оборудование</h3>
                        <div className="catalog__item-arrow"></div>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h3 className="catalog__item-title">Стабилизация</h3>
                        <div className="catalog__item-arrow"></div>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h3 className="catalog__item-title">Видеосендеры и мониторы</h3>
                        <div className="catalog__item-arrow"></div>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h3 className="catalog__item-title">Дополнительное оборудование</h3>
                        <div className="catalog__item-arrow"></div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Catalog