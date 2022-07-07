import React from "react";
// import './Cameras.css';
import '../Catalog/Catalog.css';
import '../App/App.css';
import camera1 from '../../images/cameras/red_gemini.jpg';
import camera2 from '../../images/cameras/z_cam_e2s6.png';
import camera3 from '../../images/cameras/blackmagic6k.jpg';
import camera4 from '../../images/cameras/blackmagic6kpro.jpg'

function Cameras() {
    return (
        <div className="catalog__container">
            <h2 className="catalog__title">Камеры</h2>
            <ul className="catalog__list list">
                <li className="catalog__item">
                    <img className="catalog__item-img" src={camera1} alt="RED GEMINI 5K" />
                    <h3 className="catalog__item-title">RED GEMINI 5K</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={camera2} alt="Z-CAM E2-S6" />
                    <h3 className="catalog__item-title">Z-CAM E2-S6</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={camera3} alt="BLACKMAGIC 6K" />
                    <h3 className="catalog__item-title">BLACKMAGIC 6K</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={camera4} alt="BLACKMAGIC 6K PRO" />
                    <h3 className="catalog__item-title">BLACKMAGIC 6K PRO</h3>
                    <p className="catalog__item-price">$</p>
                </li>
            </ul>
        </div>
    )
}

export default Cameras