import React from "react";
import './Catalog.css';
import '../App/App.css';

function Catalog() {
    return (
        <section className="catalog">
            <h2 className="catalog__title">Ассортимент оборудования для аренды</h2>
            <ul className="catalog__list list">
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h2 className="catalog__item-title">Камеры</h2>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h2 className="catalog__item-title">Оптика</h2>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h2 className="catalog__item-title">Световое оборудование</h2>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h2 className="catalog__item-title">Стабилизация</h2>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h2 className="catalog__item-title">Видеосендеры и мониторы</h2>
                    </div>
                </li>
                <li className="catalog__item">
                    {/* <a href="#" className="catalog__item-link"></a> */}
                    <div className="catalog__item-container">
                        <h2 className="catalog__item-title">Дополнительное оборудование</h2>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Catalog