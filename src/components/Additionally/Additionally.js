import React from "react";
import '../App/App.css';
import '../Catalog/Catalog.css';
import add1 from '../../images/additionally/follow_focus/tilta_nucleus_M_1motor.jpg';
import add2 from '../../images/additionally/follow_focus/tilta_nucleus_M_2motor.jpg';
import add3 from '../../images/additionally/follow_focus/tilta_mini_FF.jpg';
import add4 from '../../images/additionally/follow_focus/strap_follow-focus.jpg';
import add5 from '../../images/additionally/body_kit/tilta_tiltaing_15mm_LWS_type_VI.jpeg';

function Additionally() {
    return (
        <>

        <div className="catalog__container">
            <h2 className="catalog__title">Фоллоу-фокусы</h2>
            <ul className="catalog__list list">
                <li className="catalog__item">
                    <img className="catalog__item-img" src={add1} alt="Радиофокус Tilta Nucleus-M (1 мотор)" />
                    <h3 className="catalog__item-title">Радиофокус Tilta Nucleus-M (1 мотор)</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={add2} alt="Радиофокус Tilta Nucleus-M (2 мотора)" />
                    <h3 className="catalog__item-title">Радиофокус Tilta Nucleus-M (2 мотора)</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={add3} alt="Фоллоу фокус Tilta Tiltaing Mini" />
                    <h3 className="catalog__item-title">Фоллоу-фокус Tilta Tiltaing Mini</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={add4} alt="Зубчатый ремень для фоллоу фокуса" />
                    <h3 className="catalog__item-title">Зубчатый ремень для фоллоу-фокуса</h3>
                    <p className="catalog__item-price">$</p>
                </li>
            </ul>
        </div>
        <div className="catalog__container">
            <h2 className="catalog__title">Элементы обвеса</h2>
            <ul className="catalog__list list">
                <li className="catalog__item">
                    <img className="catalog__item-img" src={add5} alt="Базовая площадка Tilta Tiltaing 15mm LWS Type VI Чёрная" />
                    <h3 className="catalog__item-title">Базовая площадка Tilta Tiltaing 15mm LWS Type VI Чёрная</h3>
                    <p className="catalog__item-price">$</p>
                </li>
            </ul>
        </div>

        </>
    )
}

export default Additionally