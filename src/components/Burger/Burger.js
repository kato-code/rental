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
            <div className={`burger ${isBurgerOpen ? 'burger_is-opened' : ''}`}>
                <div className='burger__container'>
                    <button type='button' className='burger__btn-close' onClick={handleCloseBurgerClick} />
                        <nav className='burger__catalog'>Оборудование
                            <p className='burger__catalog-link'>Свет</p>
                            <p className='burger__catalog-link'>Свет</p>
                            <p className='burger__catalog-link'>Свет</p>
                            <p className='burger__catalog-link'>Свет</p>
                            <p className='burger__catalog-link'>Свет</p>
                            <p className='burger__catalog-link'>Свет</p>
                            <div className='burger__contacts'>Контакты</div>
                        </nav>
                </div>
            </div>
        </>
    )
}

export default Burger