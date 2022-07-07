import React from "react";
import '../App/App.css';
import'../Catalog/Catalog.css';
import monitor1 from '../../images/monitors/Lilliput_BM150-4KS.png';
import monitor2 from '../../images/monitors/Lilliput_BM230-12G-1.png';
import monitor3 from '../../images/monitors/Lilliput_BM280-1.png';
import monitor4 from '../../images/monitors/Portkeys_BM5-III_(v3)_WR.JPG';

function Monitors() {
    return (
        <div className="catalog__container">
            <h2 className="catalog__title">Видеосендеры и мониторы</h2>
            <ul className="catalog__list list">
                <li className="catalog__item">
                    <img className="catalog__item-img" src={monitor1} alt="Режиссерский монитор Lilliput BM150-4KS" />
                    <h3 className="catalog__item-title">Режиссерский монитор 15.6" Lilliput BM150-4KS</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={monitor2} alt="Режиссерский монитор Lilliput BM230-12G" />
                    <h3 className="catalog__item-title">Режиссерский монитор 23" Lilliput BM230-12G</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={monitor3} alt="Режиссерский монитор Lilliput BM280-4KS" />
                    <h3 className="catalog__item-title">Режиссерский монитор 28" Lilliput BM280-4KS</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={monitor4} alt="Операторский монитор Portkeys BM5 III WR" />
                    <h3 className="catalog__item-title">Операторский монитор Portkeys BM5 III WR</h3>
                    <p className="catalog__item-price">$</p>
                </li>
            </ul>
        </div>
    )
}

export default Monitors
