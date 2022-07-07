import React from "react";
import '../Catalog/Catalog.css';
import '../App/App.css';
import optics1 from '../../images/optics/Canon EF 70-200 f-2.8 L IS II USM.jpg';
import optics2 from '../../images/optics/DZOFilm Pictor 20-55 T2.8 Super35 Zoom Lens (EF Mount).jpg';
import optics3 from '../../images/optics/DZOFilm Pictor 50-125 T2.8 Super35 Zoom Lens (EF Mount).jpg';
import optics4 from '../../images/optics/Laowa 24 f-14 Probe Lens for Canon EF (Cine-Mod).jpg';
import optics5 from '../../images/optics/Sigma AF 18-35 f-1.8 DC HSM Art Canon EF-S.jpg';
import optics6 from '../../images/optics/Sigma AF 50-100 f-1.8 DC HSM Art Canon EF.jpg';
import optics7 from '../../images/optics/Tokina Cinema ATX 11-20 T2.9 (EF Mount).jpg';
import optics8 from '../../images/optics/Vazen 28 T2.2 1.8x Anamorphic MFT.jpg';
import optics9 from '../../images/optics/Venus Optics Laowa 12 t-2.9 Zero-D Cine EF.jpg';


function Optics() {
    return (
        <div className="catalog__container">
            <h2 className="catalog__title">Оптика</h2>
            <ul className="catalog__list list">
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics1} alt="Canon EF 70-200 f-2.8 L IS II USM" />
                    <h3 className="catalog__item-title">Canon EF 70-200 f-2.8 L IS II USM</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics2} alt="DZOFilm Pictor 20-55 T2.8 Super35 Zoom Lens (EF Mount)" />
                    <h3 className="catalog__item-title">DZOFilm Pictor 20-55<br/>T2.8 Super35 Zoom Lens (EF Mount)</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics3} alt="DZOFilm Pictor 50-125 T2.8 Super35 Zoom Lens (EF Mount)" />
                    <h3 className="catalog__item-title">DZOFilm Pictor 50-125 T2.8 Super35 Zoom Lens (EF Mount)</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics4} alt="Laowa 24 f-14 Probe Lens for Canon EF (Cine-Mod)" />
                    <h3 className="catalog__item-title">Laowa 24 f-14 Probe Lens for Canon EF (Cine-Mod)</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics5} alt="Sigma AF 18-35 f-1.8 DC HSM Art Canon EF-S" />
                    <h3 className="catalog__item-title">Sigma AF 18-35 f-1.8 DC HSM Art Canon EF-S</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics6} alt="Sigma AF 50-100 f-1.8 DC HSM Art Canon EF" />
                    <h3 className="catalog__item-title">Sigma AF 50-100 f-1.8 DC HSM Art Canon EF</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics7} alt="Tokina Cinema ATX 11-20 T2.9 (EF Mount)" />
                    <h3 className="catalog__item-title">Tokina Cinema ATX 11-20 T2.9 (EF Mount)</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics8} alt="Vazen 28 T2.2 1.8x Anamorphic MFT" />
                    <h3 className="catalog__item-title">Vazen 28 T2.2 1.8x Anamorphic MFT</h3>
                    <p className="catalog__item-price">$</p>
                </li>
                <li className="catalog__item">
                    <img className="catalog__item-img" src={optics9} alt="Venus Optics Laowa 12 t-2.9 Zero-D Cine EF" />
                    <h3 className="catalog__item-title">Venus Optics Laowa 12 t-2.9 Zero-D Cine EF</h3>
                    <p className="catalog__item-price">$</p>
                </li>
            </ul>
        </div>
    )
}

export default Optics