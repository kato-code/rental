import React from 'react';
import './Burger.css';
import '../App/App.css';

function Burger() {
    const [isBurgerOpen, setIsBurgerOpen] = React.useState(false)

    function handleOpenBurgerClick() {
        setIsBurgerOpen(true)
    }

    function handleCloseBurgerClick() {
        setIsBurgerOpen(false)
    }

    return (
        <>
            <div className='burger__btn' onClick={handleOpenBurgerClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`burger__overlay ${isBurgerOpen ? 'burger__overlay_is-opened' : ''}`}>
                <div className={`burger__container ${isBurgerOpen ? 'burger_is-opened' : ''}`}>
                    <button type='button' className="burger__btn-close" onClick={handleCloseBurgerClick} />
                        <ul className='burger__list list'>
                            <li className="burger__item">Оборудование
                                <ul className='burger__list list'>
                                    <li className='burger__subitem'>Камеры</li>
                                    <li className='burger__subitem'>Оптика</li>
                                    <li className='burger__subitem'>Световое оборудование</li>
                                    <li className='burger__subitem'>Стабилизация</li>
                                    <li className='burger__subitem'>Видеосендеры и мониторы</li>
                                    <li className='burger__subitem'>Дополнительное оборудование</li>
                                </ul>
                            </li>
                            <li className='burger__item'>Контакты</li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Burger