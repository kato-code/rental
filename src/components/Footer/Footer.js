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
                <div className="footer__logo logo"></div>
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
        </footer>
    )
}

export default Footer 