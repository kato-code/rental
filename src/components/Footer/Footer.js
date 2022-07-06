import React from "react";
import './Footer.css';
import '../App/App.css';
import iconAddress from '../../images/icon_address.svg';
import iconMail from '../../images/icon_mail.svg';
import iconPhone from '../../images/icon_phone.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__about-us">
                    <h2 className="footer__about-us-title">COFFIN RENTAL</h2>
                    <p className="footer__about-us-info"> 
                        <i>*Наш сайт еще нуждается в добавлении многих позиций. Если вы не видите того, что ищете, пожалуйста, свяжитесь с нами и мы сможем предложить альтернативные решения*</i> <br />
                        <br /> Мы - небольшой, но прекрасно сформированный микро-рентал съёмочного оборудования и технического обслуживания ваших проектов. <br />
                        Наша цель - стать вашим подрядчиком и поставлять вам оборудование, тщательно подготовленное и настроенное нашей, в меру токсичной, но самое главное, профессиональной командой. <br />
                        <br /> COFFIN RENTAL - с техникой до гроба.
                    </p>
                </div>
                <div className="footer__contacts">
                    <h2 className="footer__contacts-title">Контакты</h2>
                    <ul className="footer__list list">
                    <li className="footer__item">
                        <img className='footer__item-img' src={iconAddress} alt='Иконка адреса' />
                        <p className='footer__item-info'>улица Правды, 24 строение 3</p>
                    </li>
                    <li className="footer__item">
                        <img className='footer__item-img' src={iconPhone} alt='Иконка телефона' />
                        <p className='footer__item-info'>+70000000000</p>
                    </li>
                    <li className="footer__item">
                        <img className='footer__item-img' src={iconMail} alt='Иконка почтового ящика' />
                        <p className='footer__item-info'>info@000.bla</p>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer 